import React from "react";
import "./Style.css";
import anilimg from "./img/anil.jpeg";

const count = [1,2,3,4,5]

const InterestingStories = () => {
  return (
    <>
      <div className="page">
        <div className="section d-flex-sb">
            <div className="sec">
          <h1>Intersting Stories</h1>
          <p>Watch and be inspired</p>
          </div>
          <div className="slide-btns-top d-flex-sb">
              <p>All Stories</p>
            <button type="button" className="d-flex">
            <span class="iconify" data-icon="bi:arrow-left-short" data-width="36"data-height="36"></span>
            </button>
            <button type="button" className="d-flex">
            <span class="iconify" data-icon="bi:arrow-right-short" data-width="36"data-height="36"></span>
            </button>
          </div>
        </div>
        <div className="grid">
          { count.map((element)=>{
            return <div className="card-stories">
            <img src={`https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/story-${element}.jpg`} alt=" "></img>
            <div className="texts">
            <h2>Rajasthan</h2>
            <div className="uperr">
                <p>5 Days |</p>
                <h4>$300</h4>
                </div>
            </div>
          </div>
          })
          }
         
         
          </div>
      </div>
    </>
  );
};

export default InterestingStories;
