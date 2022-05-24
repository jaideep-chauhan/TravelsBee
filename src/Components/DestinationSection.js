import React from "react";
import "./Style.css";

const DestinationSection = () => {
  return (
    <div className="mainn">
      <div className="destmain d-flex-sb">
        <div className="location d-flex-sb d-flex-col">
          <h6 className="title">Destination</h6>
          <div className="location-text d-flex-sb" style={{width:"100%"}}> 
            <span className="text d-flex-sb"> <span>Portugal</span>
            <span class="iconify" data-icon="entypo:location-pin"></span></span>
          </div>
        </div>
        <div className="checkin d-flex-sb">
          <div className="box">
            <h6 className="title">Check In</h6>
            <div className="date">
              {/* <input type="date" name="" id="" />
              <input type="text" name="" id="" /> */}
              <h1>14</h1> 
            </div>
          </div>
          <div className="box">
            <h6 className="title">Check Out</h6>
            <div className="date">
              {" "}
              <h1>14</h1>{" "}
            </div>
          </div>
          <div className="box">
            <h6 className="title">Adult</h6>
            <div className="date">
              {" "}
              <h1>14</h1>{" "}
            </div>
          </div>
          <div className="box">
            <h6 className="title">Childern</h6>
            <div className="date">
              {" "}
              <h1>14</h1>{" "}
            </div>
          </div>
        </div>
        <div className="search d-flex">
          <span
            class="iconify"
            data-icon="akar-icons:search"
            data-width="26"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
