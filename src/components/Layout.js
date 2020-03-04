import React from 'react'
import Footer from '../components/Footer'
import layoutStyles from './layout.module.scss'
import Navigation from './Navigation'

import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.7

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
}

export default function Layout({children, location}) {
  // console.log(location.pathname)
  return (
      <div className= {layoutStyles.container}>
        <Navigation />
          <div className={layoutStyles.content}> 
            <AnimatePresence>
              <motion.main
                key={location.pathname}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {children}
                </motion.main>
            </AnimatePresence>
          </div>
        <Footer />
      </div>
  )
}
