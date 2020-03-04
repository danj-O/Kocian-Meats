import React from 'react'
// import Layout from '../components/Layout'
import Head from '../components/Head'
import Hero from '../components/Hero'


const AboutPage = () => {
  return (
    <div>
      <Hero heroImg="about-hero"/>
      <Head title='About' />
      <h1 className="pageHeader"> The story of Kocian Meats </h1>
      <p className="pageSubHeader">Since 1922!</p>
    </div>
  )
}
export default AboutPage