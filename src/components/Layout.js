import React from 'react'
import Footer from './Footer'
import layoutStyles from './layout.module.scss'
import Navigation from './Navigation'
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";



// const duration = 0.5

// const variants = {
//   initial: {
//     opacity: 0,
//   },
//   enter: {
//     opacity: 1,
//     transition: {
//       duration: duration,
//       delay: duration,
//       when: 'beforeChildren',
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: duration },
//   },
// }

export default function Layout({children, location}) {
  // console.log('LOC', location)
  return (
      <div className= {layoutStyles.container}>
        <Navigation />
          <div className={layoutStyles.content}> 
              {/* <TransitionProvider location={location}>
                <TransitionViews> */}
                {children}
                {/* </TransitionViews>
              </TransitionProvider> */}
          </div>
        <Footer />
      </div>
  )
}
