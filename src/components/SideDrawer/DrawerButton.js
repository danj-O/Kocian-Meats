import React from 'react'
import './Drawer-Toggle-Button.scss'

export default function DrawerButton(props) {
  return (
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        
      </button>

  )
}
