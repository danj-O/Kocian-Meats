import React from 'react'
import { Link } from "gatsby"


import './dropdown-menu.styles.scss'

export default function DropdownMenu() {
  return (
    <div className='dropdown-box'>
      <ul>
        <li><Link to='/items#beef-steak'>Beef Steak</Link></li>
        <li><Link to='/items#beef-roast'>Beef Roast</Link></li>
        <li><Link to='/items#beef-ground'>Beef Ground</Link></li>
        <li><Link to='/items#beef-other'>Beef Other</Link></li>
        <li><Link to='/items#pork'>Pork</Link></li>
        <li><Link to='/items#pork-smoked'>Pork Smoked</Link></li>
        <li><Link to='/items#pork-bacon'>Pork Bacon</Link></li><br/>
        <li><Link to='/items#pork-other'>Pork Other</Link></li>
        <li><Link to='/items#poultry'>Poultry</Link></li>
        <li><Link to='/items#seafood'>Seafood</Link></li>
        <li><Link to='/items#deli'>Deli Meats & Cheeses</Link></li>
        <li><Link to='/items#weiners'>Wieners</Link></li>
        <li><Link to='/items#lamb'>Lamb & Veal</Link></li>
        <li><Link to='/items#other'>Other</Link></li>
      </ul>
    </div>
  )
}
