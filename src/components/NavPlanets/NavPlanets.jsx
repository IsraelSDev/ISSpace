import React, { useState } from "react";
import { } from './navPlanets.scss'

export default function NavPlanets() {


  const [planetName, setPlanetName] = useState("");


  const setBorder = (e) => {
    let el = document.querySelectorAll('.activa');
    let namePlanet = e.innerHTML;
    setPlanetName(namePlanet);
    console.log(namePlanet);
    el.forEach((elemento) => {
      elemento.classList.remove('activa');
    })
    e.classList.add('activa');

  }
  return (<div className="navPlanets">
    <nav>
      <ul onClick={(e) => {
        if (e.target.nodeName === 'H5') {
          setBorder(e.target)
        } else {
          e.preventDefault();
        }

      }}>
        <li><h5>MOOM</h5></li>
        <li><h5>MARS</h5></li>
        <li><h5>EUROPA</h5></li>
        <li><h5>TITAN</h5></li>
      </ul>
    </nav>
  </div>)
}