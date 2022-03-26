import React, { useState } from 'react'
import { } from './titlePage.scss';


const TitlePage = ({ title, numberTitle, margin }) => {
  return (<>
    <h5 className="titleText" style={{ margin: `${margin}` }}><span className='titleNumber'>{numberTitle}&nbsp;&nbsp;</span>{title}</h5>
  </>)
}
export default TitlePage;