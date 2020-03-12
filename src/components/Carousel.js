import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import './Carousel.scss'
import Carousel from 'nuka-carousel'

export default function MyCarousel() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            id
            title
            fixed {
              aspectRatio
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  `)
  
  let pics = data.allContentfulAsset.edges.map(edge => {
    if (edge.node.title.includes('carousel')){
      // console.log(edge.node)
      return <Img fixed={edge.node.fixed} />
    }
    return null
  })
  return (
    <div className='carousel-box'>
      <Carousel
        autoplay= {'true'}
        cellAlign={'center'}
        slidesToShow={3}
      >
        {pics}
      </Carousel>
    </div>
  )
}
