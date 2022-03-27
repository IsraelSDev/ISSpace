import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TitlePage from '../../components/TitlePage/TitlePage'
import DefaultP from '../../components/Text/DefaultP'
import data from '../../data.json';
import { } from './crew.scss';

export default function Crew() {

  const [crewRole, setCrewRole] = useState(data.crew[0].role);
  const [crewName, setCrewName] = useState(data.crew[0].name);
  const [crewBio, setCrewBio] = useState(data.crew[0].bio);
  const [crewPhoto, setCrewPhoto] = useState(data.crew[0].images.png);
  const [idSelected, setIdSelected] = useState(0);

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
  useEffect(() => {
    if (idSelected !== undefined) {
      console.log(idSelected);
      setCrewRole(data.crew[idSelected].role)
      setCrewName(data.crew[idSelected].name)
      setCrewBio(data.crew[idSelected].bio)
      setCrewPhoto(data.crew[idSelected].images.png);
    } else {
      setIdSelected(0);
    }
  }, [idSelected])

  return (<div className="crew">
    <NavBar />
    <TitlePage title={"MEET YOUR CREW"} numberTitle={"02"} margin={"10% 6% 1% 6%"} />
    <div className="crewWrapper">
      <div className="crewDescription">
        <h4>{crewRole}</h4>
        <h3>{crewName}</h3>
        <DefaultP text={crewBio} />
        <div className="changePilot">
          <button id="0" className="active" onClick={(e) => { btn(e) }} />
          <button id="1" onClick={(e) => { btn(e) }} />
          <button id="2" onClick={(e) => { btn(e) }} />
          <button id="3" onClick={(e) => { btn(e) }} />
        </div>
      </div>
      <div className="crewPhoto">
        <div className="photoBox" style={{ backgroundImage: `url(${crewPhoto})` }} />
      </div>
    </div>
  </div>)
}