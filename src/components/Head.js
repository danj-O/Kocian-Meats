import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


export default function Head({ title }) {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)


  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} |  ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      {/* <link rel='canonical' href='https://kocianmeats.com/' /> */}
    </Helmet>
  )
}
