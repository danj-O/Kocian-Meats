import React from 'react'
import { Link } from "gatsby"
import './SideDrawer.scss'


export default function SideDrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <ul className=''>
        <li>        
          <Link className='' activeClassName='' to='/'>Home</Link>
        </li>
        <li>
          <Link className='' activeClassName='' to='/items'>Products</Link>
        </li>
        <li>
          <Link className='' activeClassName='' to='/deals'> Deals </Link>
        </li>
        <li>
          <Link className='' activeClassName='' to='/about'>About</Link>
        </li>
        <li>
          <Link className='' activeClassName='' to='/blog'>Blog</Link>
        </li>
        <li>
          <Link className='' activeClassName='' to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
