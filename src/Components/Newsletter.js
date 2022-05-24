import React from "react";
import "./Style.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="news-main d-flex-sb">
        <div className="letters">
          <h1 className="heading">Newsletters</h1>
          <p className="desc">Sign up to receive the best offer</p>
        </div>
        <div className="location dest-form d-flex-sb" style={{ gap: '40px' }}>
          <div className="location-text d-flex-sb" style={{ width: "100%" }}>
            <span className="text d-flex-sb">
              {" "}
              <span>Portugal</span>
              <span class="iconify" data-icon="entypo:location-pin"></span>
            </span>
          </div>
        <input type="text" placeholder="Email" id="" className="text d-flex-sb" style={{ width: "100%" }}/>
        <div className="search d-flex"><span class="iconify" data-icon="fluent:mail-20-filled" data-width="64" data-height="64"></span></div>
       
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
