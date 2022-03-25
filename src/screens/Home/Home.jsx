import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import DefaultP from "../../components/Text/DefaultP";
import { } from './home.scss';

export default function Home(props) {
  return (<>
    <div className="home">
      <NavBar />
      <div className="text-home">
        <h5>
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1>SPACE</h1>
        <DefaultP text={"Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"} />
      </div>
      <div className="button-box">
        <Link to="/destination" className="button">
          <h2>EXPLORE</h2>
        </Link>
      </div>
    </div>
  </>)
}
