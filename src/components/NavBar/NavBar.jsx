import React, { useState } from "react";
import { Link } from "react-router-dom";
import { } from "./navBar.scss";

export default function NavBar() {

  const [id, setId] = useState("home");


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
            <li id="home">
              <Link to="/"><span>00</span> HOME</Link>
            </li>
            <li id="destination">
              <Link to="/destination"><span>01</span> DESTINATION </Link>
            </li>
            <li id="crew">
              <Link to="/crew"><span>02</span> CREW</Link>
            </li>
            <li id="technology">
              <Link to="/technology"><span>03</span> TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>)
}