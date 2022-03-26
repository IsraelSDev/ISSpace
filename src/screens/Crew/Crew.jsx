import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TitlePage from '../../components/TitlePage/TitlePage'
import DefaultP from '../../components/Text/DefaultP'
import data from '../../data.json';
import { } from './crew.scss';

export default function Crew() {

  const [pilotName, setPilotName] = useState(data.crew[0].name);
  const [pilotBio, setPilotBio] = useState(data.crew[0].bio);
  const [idSelected, setIdSelected] = useState("");

  const btn = (e) => {
    let button = e.target;

    if (!button.classList.contains('active')) {
      let el = document.querySelectorAll('button').forEach(el => {
        el.classList.remove('active');
      });
      setIdSelected(e.target.id)
      button.classList.add('active');
    } else {
      return false;
    }
  }

  return (<div className="crew">
    <NavBar />
    <TitlePage title={"MEET YOUR CREW"} numberTitle={"02"} margin={"5% 6% 1% 6%"} />
    <div className="crewWrapper">
      <div className="crewDescription">
        <h4> PILOT </h4>
        <h3>{pilotName}</h3>
        <DefaultP text={pilotBio} />
        <div className="changePilot">
          <button id="1" className="active" onClick={(e) => { btn(e) }} />
          <button id="2" onClick={(e) => { btn(e) }} />
          <button id="3" onClick={(e) => { btn(e) }} />
          <button id="4" onClick={(e) => { btn(e) }} />
        </div>
      </div>
      <div className="crewPhoto">

      </div>
    </div>
  </div>)
}