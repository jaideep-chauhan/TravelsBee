import React from "react";
import { useState } from "react";
import "./Style.css";

const Maindiv = () => {
  const [bgurl, setBgurl] = useState(
    "https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/main_img-1.jpg"
  );

  const [count, setCount] = useState(1);

  let Slides = [
    {
      1: {
        newurl:
          "https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/main_img-1.jpg",
      },
    },
    {
      2: {
        newurl:
          "https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/main_img-2.jpg",
      },
    },
    {
      3: {
        newurl:
          "https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/main_img-3.jpg",
      },
    },
  ];

  const Change = () => {};

  return (
    <div className="background" style={{ backgroundImage: `url("${bgurl}")` }}>
      <div className="main">
        <div className="content">
          <div className="cont">
            <div style={{ width: "fit-content", position: "relative" }}>
              <p className="country" style={{ textAlign: "right" }}>
                United State of Paragraph
              </p>
              <h1>Arizona</h1>
            </div>
            <p>
              The largest part of the world , Both in teriotry and population{" "}
              <br />
              Anil Suthar is great.
            </p>
          </div>
          <div className="btn ">
            <a href="#">
              {" "}
              <button type="button">Book Now</button>
            </a>
            <a href="#">
              <span>Choose Tour</span>
            </a>
          </div>
        </div>
      </div>
      <div className="slide-btns d-flex">
        <button type="button" className="d-flex" onClick={Change}>
          <span
            class="iconify"
            data-icon="bi:arrow-left-short"
            data-width="36"
            data-height="36"
          ></span>
        </button>
        <button type="button" className="d-flex" onClick={Change}>
          <span
            class="iconify"
            data-icon="bi:arrow-right-short"
            data-width="36"
            data-height="36"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Maindiv;
