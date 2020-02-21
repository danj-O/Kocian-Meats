import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className= {layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}> 
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
