import React from "react"
// import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/globals.scss'
import itemStyles from './items.module.scss'
import './index.scss'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import { Link } from 'gatsby-plugin-modal-routing'



const IndexPage = () =>{
  const data = useStaticQuery(graphql`
    query {
      allContentfulDeals {
        edges {
          node {
            frontPage
            name
            slug
            shortDescription
            price
            pricePer
            dealsImage {
              file {
                fileName
                url
                
              }
            }
          }
        }
      }

    }
  `)


  return(
    <div>
      <Head title="home"/>
      <Hero header="Welcome To Kocian Meats" subHeader='Since 1922' heroImg='deals-hero'/>
      <div className="header-box">
        {/* <h1 className="pageHeader"> Welcome to the Kocian Meats online market!</h1> */}
        <p className="pageSubHeader">To get started, check out our fresh deals!</p>
      </div>
      <div className={itemStyles.items}>
        { 
          data.allContentfulDeals.edges.map((edge) => {
            if (edge.node.frontPage){
              return (
                <div key={edge.node.slug} className={itemStyles.item}>
                  <Link to={`/deals/${edge.node.slug}`} asModal state={{noScroll: true}}>
                    <div className={itemStyles.imageContainer}>
                      <img src={edge.node.dealsImage.file.url} alt=""/>
                    </div>
                    <div className={itemStyles.itemText}>
                      <h2>{edge.node.name}</h2>
                      <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                      <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                    </div>
                  </Link>
                </div>
              )
            }
            return null
          })
        }
      </div>
      <div className='page-links'>
        <Link to='/deals'>
          See all Specials
        </Link>
        <Link to='/items'>
          See all Products
        </Link>
      </div>
      <div>
        <Carousel />
      </div>
      {/* <div>
        All of our products come locally sourced so you know it'll be the best every time!
      </div> */}
    </div>
  )
}
export default IndexPage