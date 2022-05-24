import React from "react";
import "./Style.css";
import anilimg from "./img/anil.jpeg";

const count = [1,2,3]

const RecentBlog = () => {
  return (
    <>
      <div className="page">
        <div className="section d-flex-sb">
          <div className="sec">
            <h1>Recent Blog Posts</h1>
            <p>Latin literature from 45 BC, making it over 2000 year old</p>
          </div>
          <div className="slide-btns-top d-flex-sb">
            <p>All Blog Posts</p>
          </div>
        </div>
        <div className="blog-row d-flex-sb"> 
          {count.map((element)=>{
            return <div className="blog">
            <div className="grid1">
              <div className="card2">
                <img src={`https://demo.createdbycocoon.com/drupal/tripin/1/sites/default/files/cocoon/blog-${element}.jpg`} alt=" "></img>
                <div className="textr">
                  <h2>Rajasthan is a State od India</h2>
                </div>
              </div>
            </div>
            <div className="img-btm">
              <img src={anilimg} alt=" "></img>
              <p>June 30th by admin</p>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusanti
            </p>
          </div>
          })}
          
        </div>
      </div>
    </>
  );
};

export default RecentBlog;
