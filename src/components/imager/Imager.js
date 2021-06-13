import React, { Component } from "react";
import "./Imager.css";
import Display from "../display/Display";
import Thumbnail from "../thumbnail/Thumbnail";

export class Imager extends Component {
  state = {};
  render() {
    return (
      <div>
        <Display />
        <div className="random-button-div">
          <button className="random-button" type="submit">
            Random
          </button>
        </div>
        <div className="fwd-back-buttons">
          <button className="back" type="submit">
            &lt;
          </button>
          <button className="forward" type="submit">
            &gt;
          </button>
        </div>
        <Thumbnail />
      </div>
    );
  }
}

export default Imager;
