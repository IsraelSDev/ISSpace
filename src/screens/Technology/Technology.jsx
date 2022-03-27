import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import DefaultP from "../../components/Text/DefaultP";
import TitlePage from '../../components/TitlePage/TitlePage';
import data from '../../data.json';
import { } from './technology.scss';

export default function Technology() {

  const [title, setTitle] = useState(data.technology[0].name);
  const [text, setText] = useState(data.technology[0].description);

  const selectId = (e) => {
    const el = document.querySelectorAll('button').forEach(e => {
      if (e.classList.contains('activated')) {
        e.classList.remove('activated');
      } else {
        return false;
      }
    })
    e.classList.add('activated');
  }

  return (<div className="technologyScreen">
    <NavBar />
    <TitlePage numberTitle={"03"} title={"SPACE LAUNCH 101"} />
    <div className="launchContent">
      <div className="launchNav">
        <button id="0" className="activated" onClick={(e) => { selectId(e.target) }}>1</button>
        <button id="1" onClick={(e) => { selectId(e.target) }}>2</button>
        <button id="2" onClick={(e) => { selectId(e.target) }}>3</button>
      </div>
      <div className="launchDetail">
        <h6>
          THE TERMINOLOGY…
        </h6>
        <h3>
          {title}
        </h3>
        <DefaultP text={text} />
      </div>
      <div className="launchPhoto">
        c
      </div>
    </div>
  </div >)
}