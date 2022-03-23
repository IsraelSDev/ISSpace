import React, { useState } from "react";
import { Link } from "react-router-dom";
import { } from "./navBar.scss";

export default function NavBar() {

  return (<>
    <div className="navbar">
      <div className="icon">
        <div className="logo">
          <Link to="/">
            <div className="logo-svg" />
          </Link>
        </div>
        <div className="line-box">
          <div className="line" />
        </div>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/"><h4><span>00</span> HOME</h4></Link>
            </li>
            <li >
              <Link to="/destination"><h4><span>01</span> DESTINATION</h4> </Link>
            </li>
            <li >
              <Link to="/crew"><h4><span>02</span> CREW</h4></Link>
            </li>
            <li>
              <Link to="/technology"><h4><span>03</span> TECHNOLOGY</h4></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>)
}