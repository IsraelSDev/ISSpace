import React from 'react'
import { } from './text.scss'

export default function DefaultP(props) {
  return (
    <p className='default-p'>
      {props.text}
    </p>
  )
}