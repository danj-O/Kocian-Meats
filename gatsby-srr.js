import React from 'react'
import Layout from './src/components/Layout'

const transitionDelay = 800;


export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};