import React from "react";
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
              <Link to=""><span>00</span> HOME</Link>
            </li>
            <li>
              <Link to=""><span>01</span> DESTINATION </Link>
            </li>
            <li>
              <Link to=""><span>02</span> CREW</Link>
            </li>
            <li>
              <Link to=""><span>03</span> TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>)
}