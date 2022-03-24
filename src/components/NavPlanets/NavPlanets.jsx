import React from "react";
import { } from './navPlanets.scss'

export default function NavPlanets() {

  const setBorder = (e) => {
    let el = document.querySelectorAll('.activa');
    el.forEach((elemento) => {
      elemento.classList.remove('activa');
    })
    e.classList.add('activa');
  }
  return (<div className="navPlanets">
    <nav>
      <ul onClick={(e) => { setBorder(e.target) }}>
        <li><h5>MOOM</h5></li>
        <li><h5>MARS</h5></li>
        <li><h5>EUROPA</h5></li>
        <li><h5>TITAN</h5></li>
      </ul>
    </nav>
  </div>)
}