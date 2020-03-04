import React from 'react'
import Footer from '../components/Footer'
import layoutStyles from './layout.module.scss'
import Navigation from './Navigation'

import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.8

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
    transition: { duration: duration },
  },
}

export default function Layout({children, location}) {
  return (
      <div className= {layoutStyles.container}>
        <Navigation />
          <div className={layoutStyles.content}> 
            <AnimatePresence>
              <motion.main
                // key={location.pathname}
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
