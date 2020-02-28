import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import '../styles/globals.scss'



const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <h1 className="pageHeader"> Contact </h1>
      <p className="pageSubHeader"> Call in to make orders or stop by our location! </p>
    </Layout>
  )
}
export default ContactPage