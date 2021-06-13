import React, { Component } from "react";
import "./Thumbnail.css";

export class Thumbnail extends Component {
  render() {
    return (
      <div className="thumbnail-wrapper">
        <div className="thumbnail-div1">
          <img
            className="image image-1"
            src={"../../images/1.jpg"}
            alt="nature"
          />
          <img
            className="image image-2"
            src={"../../images/2.jpg"}
            alt="nature"
          />
          <img
            className="image image-3"
            src={"../../images/3.jpg"}
            alt="nature"
          />
        </div>
        <div className="thumbnail-div2">
          <img
            className="image image-4"
            src={"../../images/4.jpg"}
            alt="nature"
          />
          <img
            className="image image-5"
            src={"../../images/5.jpg"}
            alt="nature"
          />
          <img
            className="image image-6"
            src={"../../images/6.jpg"}
            alt="nature"
          />
        </div>
        <div className="thumbnail-div3">
          <img
            className="image image-7"
            src={"../../images/7.jpg"}
            alt="nature"
          />
          <img
            className="image image-8"
            src={"../../images/8.jpg"}
            alt="nature"
          />
          <img
            className="image image-9"
            src={"../../images/9.jpg"}
            alt="nature"
          />
        </div>
        <div className="thumbnail-div4">
          <img
            className="image image-10"
            src={"../../images/10.jpg"}
            alt="nature"
          />
          <img
            className="image image-11"
            src={"../../images/11.jpg"}
            alt="nature"
          />
          <img
            className="image image-12"
            src={"../../images/12.jpg"}
            alt="nature"
          />
        </div>
      </div>
    );
  }
}

export default Thumbnail;
