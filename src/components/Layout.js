import React from 'react'
import Footer from './Footer'
import layoutStyles from './layout.module.scss'
import Navigation from './Navigation'


export default function Layout({children, location}) {
  // console.log('LOC', location)
  return (
      <div className= {layoutStyles.container}>
        <Navigation />
          <div className={layoutStyles.content}> 
                {children}
          </div>
        <Footer />
      </div>
  )
}
