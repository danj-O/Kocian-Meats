import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import '../styles/globals.scss'
import './about.scss'



const AboutPage = () => {
  return (
    <div>
        <Head title='About' />
        <Hero heroImg="about-hero"/>
      <div className='about-content'>
        <div className='header-box'>
          <h1 className="pageHeader"> The story of Kocian Meats </h1>
          <p className="pageSubHeader">Since 1922!</p>
        </div>
        <p className='about-p'>
          The story of Kocian Meats & Marketplace coming soon!
        </p>
      </div>
    </div>
  )
}
export default AboutPage