import React, { useState, useContext, useEffect } from 'react'
import PlanetNameContext from "../../context/PlanetNameContext";
import data from '../../data.json'
import DefaultP from '../Text/DefaultP'
import { } from './planetDetails.scss'

const PlanetDetail = (props) => {

  const nameOfSelected = useContext(PlanetNameContext);

  const [planetName, setPlanetName] = useState(data.destinations[0].name);
  const [planetImagePic, setPlanetImagePic] = useState(data.destinations[0].images.png);
  const [planetDescription, setPlanetDescription] = useState(data.destinations[0].description);
  const [avgDistance, setAvgDistance] = useState(data.destinations[0].distance);
  const [estTravelTime, setEstTravelTime] = useState(data.destinations[0].travel);

  useEffect(() => {
    data.destinations.map((e) => {
      if (e.name.toLocaleUpperCase().includes(nameOfSelected.namePlanet)) {
        setPlanetName(e.name)
        setPlanetImagePic(e.images.png)
        setPlanetDescription(e.description)
        setAvgDistance(e.distance)
        setEstTravelTime(e.travel)
      } else {
        return false;
      }
    })
  }, [nameOfSelected.namePlanet])

  return (<div className='planetDetailContainer'>
    <div className='planetImageContainer'>
      <div className='planetImage' style={{ backgroundImage: `url("${planetImagePic}")` }} />
    </div>

    <div className='planetDetailDescriptionBox'>
      <div className='upSideDescription'>
        <h2> {planetName} </h2>
      </div>
      <div className='downSideDescription'>
        <DefaultP text={planetDescription} />
      </div>

      <div className='lineDivision' />

      <div className='underLineDescriptionWraper'>
        <div className='box-1-underline'>
          <h6>
            AVG. DISTANCE
          </h6>
          <h3>
            {avgDistance}
          </h3>
        </div>
        <div className='box-2-underline'>
          <h6>
            Est. travel time
          </h6>
          <h3>
            {estTravelTime}
          </h3>
        </div>
      </div>
    </div>
  </div>)
}

export default PlanetDetail; 