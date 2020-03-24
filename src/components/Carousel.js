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
            fluid {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  `)
  
  let pics = data.allContentfulAsset.edges.map(edge => {
    if (edge.node.title.includes('carousel')){
      // console.log(edge.node)
      return <Img  key={edge.node.id} fluid={edge.node.fluid} />
    }
    return null
  })
  return (
    <div className='carousel-box'>
      <Carousel
        autoplay= {true}
        cellAlign={'center'}
        slidesToShow={2}
        // scrollMode={'remainder'}
        // cellSpacing={'.5'}
        wrapAround={true}
        transitionMode={'scroll'}
        slideWidth={.8}
        frameOverflow={'hidden'}
        autoGenerateStyleTag={true}
        pauseOnHover={false}
        // framePadding={'20px 20px'}
      >
        {pics}
      </Carousel>
    </div>
  )
}
