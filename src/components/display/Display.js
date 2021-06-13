import React, { Component } from "react";
import "./Display.css";

export class Display extends Component {
  render() {
    return (
      <div className="display-wrapper">
        <div className="image1-div">
          <img className="image-1" src={"../../images/1.jpg"} alt="nature" />
        </div>
      </div>
    );
  }
}

export default Display;
