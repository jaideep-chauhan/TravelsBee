import React from "react";
import "./Style.css";
import {Link} from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div className="nav2 nav" style={{zIndex:'100'}}>
      <div className="left-nav d-flex">
        <div className="search icon d-flex">
          <span
            class="iconify"
            data-icon="akar-icons:search"
            data-width="26"
          ></span>
          </div>
          <div className="logo heading d-flex">
              <Link to="/" style={{color:"white"}}>Travel<span style={{color: '#e95050', fontSize:'22px',padding:'0 2px 5px 2px'}}>•</span>Bee</Link>
          </div>
        <div className="center-nav">
          <ul className="d-flex">
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/TravelList">Travel List</Link>
            </li>
            <li>
              <Link to="/Page">Page</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="icon d-flex">
          <span class="iconify" data-icon="bx:user" data-width="36"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
