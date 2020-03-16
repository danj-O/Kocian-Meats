import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import './Hero.scss'

//props for text over hero
export default function Hero(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            id
            title
            description
            fixed {
              src
              srcSet
            }
            fluid {
              src
              srcSet
              aspectRatio
              sizes
            }
          }
        }
      }
    }
  `)
    // console.log('edges',data.allContentfulAsset.edges.node.fluid)
  return (
    <div className='hero-container'>
      {
        data.allContentfulAsset.edges.map((edge) => {
          if (edge.node.title === props.heroImg){     
            // console.log('edge',edge)
            return (
              <Img 
                fluid={edge.node.fluid}
                alt={edge.node.description}
                key={edge.node.id}/>)
          }
          return null
        })
      }
      <div className='hero-text'>
        <h1 className='hero-header'>
          {props.header}
        </h1>
        <h2 className='hero-subHeader'>
          {props.subHeader}
        </h2>
      </div>
    </div>
  )
}
