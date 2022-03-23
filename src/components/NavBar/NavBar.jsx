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
        <h1></h1>
      </div>
    </div>
  </>)
} 