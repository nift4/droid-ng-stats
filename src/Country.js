import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { countries } from "country-data";
import { BsFillPhoneFill, BsDownload } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { VscVersions } from "react-icons/vsc";
import "./css/main.css";

function Country() {
  const [countryDetails, setCountryDetails] = useState({});
  const [topDevices, setTopDevices] = useState({});
  const [topVersions, setTopVersions] = useState({});
  const location = useLocation();
  const country = location.state.country;
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = () => {
    axios
      .get(`https://stats.materium.eu.org/api/v1/getCountry/${country}`)
      .then((res) => {
        setCountryDetails(res.data);
        setTopDevices(res.data.top_devices);
        setTopVersions(res.data.top_versions);
        console.log(countryDetails);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div className="details-container">
          <span className="heading-text">
            <h1 className="deviceName">
              <BsFillPhoneFill
                style={{
                  margin: "0rem 1rem",
                }}
              />
              {countryDetails.country}
            </h1>
          </span>
          <span className="heading-text">
            <h1>
              <BsDownload
                style={{
                  margin: "0rem 1rem",
                }}
              />
              Total number of installations {countryDetails.installations}
            </h1>
          </span>
          <span className="heading-text">
            <h1>
              <BiWorld
                style={{
                  margin: "0rem 1rem",
                }}
              />
              Top installed countries:
            </h1>
            {Object.keys(topDevices).map((key, index) => (
              <span className="details" key={index}>
                <h2>
                  {key} <span className="space"></span> {topDevices[key]}
                </h2>
              </span>
            ))}
          </span>
          <span className="heading-text">
            <h1>
              <VscVersions
                style={{
                  margin: "0rem 1rem",
                }}
              />
              Latest versions
            </h1>
            <table>
              <tbody>
                <tr>
                  <td>Version</td>
                  <td>Downloads</td>
                </tr>
                {Object.keys(topVersions).map((key, index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{topVersions[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Country;
