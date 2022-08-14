import React from "react";
import "./css/main.css";
import Table from "./Table";
import axios from "axios";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://stats.droid-ng.eu.org/api/v1/getAllDevices")
      .then((res) => {
        this.setState({ res: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="left">
            <h1>Statistics</h1>
            <p>
              Statistics of droid-ng installations: Total number of devices, their respective
              verions, number of installs, most installed, country popularity etc.
            </p>
          </div>
          <div className="right">
            <h1>Total number of devices:</h1>
            <h1 className="num">{this.state.res.length}</h1>
          </div>
        </div>
        <Table />
      </div>
    );
  }
}

export default Stats;
