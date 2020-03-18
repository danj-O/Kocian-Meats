import React from 'react'
import './BackDrop.scss'

export default function BackDrop(props) {
  return (
    <div className='back-drop' onClick={props.click} onKeyDown={props.click} />
      
  )
}
