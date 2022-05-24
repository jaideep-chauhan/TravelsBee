import React from "react";
import "./Style.css";
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="nav" style={{zIndex:'100'}}>
      <div className="left-nav d-flex">
        <div className="search icon d-flex">
          <span
            class="iconify"
            data-icon="akar-icons:search"
            data-width="26"
          ></span>
          </div>
          <div className="logo heading d-flex">
            <Link to="/">Travel<span style={{color: '#e95050', fontSize:'22px',padding:'0 2px 5px 2px'}}>•</span>Beee</Link>
        </div>
        <div className="center-nav">
          <ul className="d-flex">
            <li>
              <NavLink activeClassName="active" to="/" >Homee</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/TravelList">Travel List</NavLink>
            </li>
            <li>
              <NavLink to="/Page">Page</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
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

export default Navbar;
