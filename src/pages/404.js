import React from 'react'
import { Link } from 'gatsby'
// import Layout from '../components/Layout'
import Head from '../components/Head'
import '../styles/globals.scss'


export default function NotFound() {
  return (
    <div>
      <Head title='404' />
      <h1 className="pageHeader">Page not found!</h1>
      <p className="pageSubHeader"><Link to='/'> back to home</Link></p>
    </div>
  )
}
