import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'


const AboutPage = () => {
  return (
    <Layout>
      <Head title='About' />
      <h1 className="pageHeader"> The story of Kocian Meats </h1>
      <p className="pageSubHeader">Since 1922!</p>
    </Layout>
  )
}
export default AboutPage