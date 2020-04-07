import React from 'react'
import Footer from './Footer'
import layoutStyles from './layout.module.scss'
import Navigation from './Navigation'
import CallButton from './CallButton'


export default function Layout({children}) {
  // console.log('LOC', location)
  return (
      <div className= {layoutStyles.container}>
        <Navigation />
        <div className={layoutStyles.content}> 
          {children}
        </div>
        <CallButton />
        <Footer />
      </div>
  )
}
