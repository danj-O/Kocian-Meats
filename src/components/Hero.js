import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
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
    }
  `)

  return (
    <div className='hero-container'>
      {
        data.allContentfulAsset.edges.map((edge) => {
          if (edge.node.title === props.heroImg){     
            return (<img key={edge.node.title} src={edge.node.file.url} alt="Kocian Meats background"/>)
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
