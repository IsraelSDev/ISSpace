import React, { useState } from 'react'
import { } from './titlePage.scss';


const TitlePage = ({ title, numberTitle }) => {
  return (<>
    <h5 className='titleText'><span className='titleNumber'>{numberTitle}&nbsp;&nbsp;</span>{title}</h5>
  </>)
}
export default TitlePage;