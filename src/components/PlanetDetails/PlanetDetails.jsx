import React from 'react'
import data from '../../data.json'
import { } from './planetDetails.scss'

const PlanetDetail = (props) => {

  const planetImagePic = data.destinations[0].images.png;
  console.log(planetImagePic)

  // console.log(data.destinations[0].name) 

  return (<div className='planetDetailContainer'>
    <div className='planetImageContainer'>
      <div className='planetImage' style={{
        backgroundImage: `url("${planetImagePic}")`
      }} />
    </div>
    <div className='planetDetailDescriptionBox'>

    </div>
  </div>)
}

export default PlanetDetail; 