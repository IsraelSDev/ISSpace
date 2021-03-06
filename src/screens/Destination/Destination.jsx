import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import TitlePage from '../../components/TitlePage/TitlePage';
import NavPlanets from '../../components/NavPlanets/NavPlanets';
import { } from './destination.scss';
import PlanetDetail from "../../components/PlanetDetails/PlanetDetails";

export default function Destination() {
  return (<div className="destination">
    <NavBar />
    <TitlePage numberTitle={"01"} title={"PICK YOUR DESTINATION"} />
    <NavPlanets />
    <PlanetDetail />
  </div>)
}