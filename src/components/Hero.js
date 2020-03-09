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
            title
            file {
              url
            }
          }
        }
      }
      allImageSharp {
        nodes {
          id
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
          fixed {
            originalName
          }
        }
      }
    }
  `)
    console.log(data.allImageSharp.nodes)
  return (
    <div className='hero-container'>
      {
        data.allImageSharp.nodes.map((node) => {
          if (node.fluid.originalName === props.heroImg){     
            return (
              <Img 
                fluid={node.fluid}
                key={node.id}/>)
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
