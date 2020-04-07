import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './CallButton.scss'


export default function CallButton() {
  return (
    <div className='btn-container'>
      <p>Call in your order!</p>
      <a href="tel:2168817676">
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </div>
  )
}
