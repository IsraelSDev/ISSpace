import React from 'react'
import data from '../../data.json'
import DefaultP from '../Text/DefaultP'
import { } from './planetDetails.scss'

const PlanetDetail = (props) => {

  const planetImagePic = data.destinations[0].images.png;
  const planetDescription = data.destinations[0].description;

  // console.log(data.destinations[0].name) 

  return (<div className='planetDetailContainer'>
    <div className='planetImageContainer'>
      <div className='planetImage' style={{ backgroundImage: `url("${planetImagePic}")` }} />
    </div>

    <div className='planetDetailDescriptionBox'>
      <div className='upSideDescription'>
        <h2> MOON </h2>
      </div>
      <div className='downSideDescription'>
        <DefaultP text={planetDescription} />
      </div>

      <div className='lineDivision' />


    </div>
  </div>)
}

export default PlanetDetail; 