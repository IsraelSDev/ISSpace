import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { } from "./navBar.scss";

export default function NavBar() {

  let pathName = window.location.pathname;

  useEffect(() => {
    const curPage = document.getElementsByClassName(`${pathName}`)[0].classList.add('active');
  }, [pathName])

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
              <Link to="/" className="/"><h4><span>00</span> HOME</h4></Link>
            </li>
            <li>
              <Link to="/destination" className="/destination"><h4><span>01</span> DESTINATION</h4> </Link>
            </li>
            <li>
              <Link to="/crew" className="/crew"><h4><span>02</span> CREW</h4></Link>
            </li>
            <li>
              <Link to="/technology" className="/technology"><h4><span>03</span> TECHNOLOGY</h4></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>)
}