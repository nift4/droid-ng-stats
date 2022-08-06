import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillPhoneFill, BsDownload } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { VscVersions } from "react-icons/vsc";
import "./css/main.css";

function Device() {
  const location = useLocation();
  const device = location.state;
  const [details, setDetails] = useState({});
  const [topCountries, setTopCountries] = useState({});
  const [latest, setLatest] = useState({});
  const [topVersions, setTopVersions] = useState({});
  useEffect(() => {
    axios
      .get(`https://stats.droid-ng.eu.org/api/v1/getDevice/${device.device}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
        setTopCountries(res.data.top_countries);
        setLatest(res.data.top_versions);
        setTopVersions(res.data.top_builds);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="details-container">
        <span className="heading-text">
          <h1 className="deviceName">
            <BsFillPhoneFill
              style={{
                margin: "0rem 1rem",
              }}
            />
            {details.name}
          </h1>
        </span>
        <span className="heading-text">
          <h1>
            <BsDownload
              style={{
                margin: "0rem 1rem",
              }}
            />
            Total number of installations {details.installations}
          </h1>
        </span>
        <span className="heading-text">
          <h1 style={{ margin: "1rem 0rem" }}>
            <BiWorld
              style={{
                margin: "0rem 1rem",
              }}
            />
            Top installed countries:
          </h1>
          {Object.keys(topCountries).map((key, index) => (
            <span className="details" key={index}>
              <h2>
                {key} <span className="space"></span> {topCountries[key]}
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
              {Object.keys(latest).map((key, index) => (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{latest[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </span>
        <span className="heading-text">
          <h1>
            <VscVersions
              style={{
                margin: "0rem 1rem",
              }}
            />
            Top versions
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
  );
}

export default Device;
