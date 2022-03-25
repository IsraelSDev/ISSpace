import React, { useContext } from "react";
import PlanetNameContext from "../../context/PlanetNameContext";
import { } from './navPlanets.scss'


function NavPlanets() {

  const planetName = useContext(PlanetNameContext);

  const setBorder = (e) => {
    let el = document.querySelectorAll('.activa');
    let namePlanet = e.innerHTML;
    planetName.setNamePlanet(namePlanet);
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
        <li><h5 className="activa">MOOM</h5></li>
        <li><h5>MARS</h5></li>
        <li><h5>EUROPA</h5></li>
        <li><h5>TITAN</h5></li>
      </ul>
    </nav>
  </div>)
}

export default NavPlanets;