import React from 'react'
import Footer from '../components/Footer'
import layoutStyles from './layout.module.scss'
import Navigation from './Navigation'

export default function Layout(props) {
  return (
    <div className= {layoutStyles.container}>
      <Navigation />
      <div className={layoutStyles.content}> 
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
