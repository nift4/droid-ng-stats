import React from "react";
import "./css/main.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      device: [],
      countries: [],
      countriesList: [],
    };
  }
  async componentDidMount() {
    const deviceArray = [];
    const countriesArray = [];
    await axios
      .get("https://stats.droid-ng.eu.org/api/v1/getAllDevices")
      .then((res) => {
        this.setState({ devices: res.data });
      })
      .catch((err) => console.log(err));
    await this.state.devices.forEach((device) => {
      axios
        .get(`https://stats.droid-ng.eu.org/api/v1/getDevice/${device}`)
        .then((res) => {
          deviceArray.push(res.data);
          if (deviceArray.length === this.state.devices.length) {
            this.setState({ device: deviceArray });
          }
        })
        .catch((err) => console.log(err));
    });
    await axios
      .get("https://stats.droid-ng.eu.org/api/v1/getTopCountries")
      .then((res) => {
        this.setState({ countries: res.data });
      })
      .catch((err) => console.log(err));
    await this.state.countries.forEach((country) => {
      axios
        .get(`https://stats.droid-ng.eu.org/api/v1/getCountry/${country}`)
        .then((res) => {
          const obj = {
            country: country,
            Installations: res.data.installations,
          };
          countriesArray.push(obj);
          if (countriesArray.length === this.state.countries.length) {
            this.setState({ countriesList: countriesArray });
          }
        })
        .catch((err) => console.log(err));
    });
  }
  render() {
    return (
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td className="table-head">Device</td>
              <td className="table-head">Installations</td>
            </tr>
            {this.state.device.map((singleDev, index) => {
              return (
                <tr key={index} className="margin_table">
                  <td
                    style={{
                      backgroundColor: "white",
                      borderRadius: "3px",
                    }}
                  >
                    {" "}
                    <Link
                      to={`/${singleDev.name}`}
                      state={{ device: singleDev.name }}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {singleDev.name}
                    </Link>
                  </td>
                  <td
                    style={{
                      backgroundColor: "white",
                      borderRadius: "3px",
                    }}
                  >
                    {singleDev.installations}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="countries">
          <table>
            <tbody>
              <tr>
                <td className="table-head">Country</td>
                <td className="table-head">Installations</td>
              </tr>
              {this.state.countriesList.map((country, index) => {
                return (
                  <tr key={index} className="margin_table">
                    <td
                      style={{
                        backgroundColor: "white",
                        borderRadius: "3px",
                      }}
                    >
                      <Link
                        to={`/en/${country.country}`}
                        state={{ country: country.country }}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        {country.country}
                      </Link>
                    </td>
                    <td
                      style={{
                        backgroundColor: "white",
                        borderRadius: "3px",
                      }}
                    >
                      {country.Installations}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
