import React from "react";
import "./Style.css";
// import anilimg from "./img/anil.jpeg";

const count = [1, 2];

const MostPopularTours = () => {
  return (
    <>
      <div className="page">
        <div className="section d-flex-sb">
          <div className="sec">
            <h1>Most Popular Tours</h1>
            <p>Latin literature from 45 BC, making it over 2000 year old</p>
          </div>
          <div className="slide-btns-top d-flex-sb">
            <p>View All Tours</p>
            <button type="button"  className="d-flex">
              <span
                class="iconify"
                data-icon="bi:arrow-left-short"
                data-width="36"
                data-height="36"
              ></span>
            </button>
            <button type="button"  className="d-flex">
              <span
                class="iconify"
                data-icon="bi:arrow-right-short"
                data-width="36"
                data-height="36"
              ></span>
            </button>
          </div>
        </div>
        <div className="grid">
          { count.map((element)=>{
            return <div className="card1">
            <img src={`https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/tour-item-${element}.jpg`} alt=" "></img>
            <div className="text">
              <h2>Rajasthan is a State od India</h2>
              <div className="uper">
                <p>5 Days |</p>
                <h4>$300</h4>
              </div>
            </div>
          </div>
          })}
          
        </div>
      </div>
    </>
  );
};

export default MostPopularTours;
