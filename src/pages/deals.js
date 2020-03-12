import React from "react"
// import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import itemStyles from './items.module.scss'
import Head from '../components/Head'
import Hero from '../components/Hero'
import '../styles/globals.scss'
import { Link } from 'gatsby-plugin-modal-routing'
import './deals.scss'



const Deals = () =>{
  const data = useStaticQuery(graphql`
    query {
      allContentfulDeals {
        edges {
          node {
            name
            slug
            shortDescription
            price
            pricePer
            dealType
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
        <Head title="Deals"/>
        <Hero header="Specials" subHeader="Check back here to catch special deals!" heroImg="deals-hero"/>
        <div className='header-box'>
          <h1 className="pageHeader"> Our specials! </h1>
          <p className="pageSubHeader">Updated daily with our juiciest deals</p>
        </div>
          <div className='subscribe-box-deals'>
            <p>
              Like these great specials? Subscribe to our mailing list to be the first to hear about them!
            </p>
            
            <Link to="/deals#subscribe">
              Sign up here!
            </Link>
          </div>


        <div className={itemStyles.meatContainer}>
          <h1 id='fvp' className={itemStyles.meatTypeHeader}>
            Family Value Packs
          </h1>
          <div className={itemStyles.items}>
            { 
              data.allContentfulDeals.edges.map((edge) => {
                if (edge.node.dealType[0] === 'FVP'){
                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/deals/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.dealType}
                        </p>
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
        </div>

        <div className={itemStyles.meatContainer}>
          <h1 id='sfvp' className={itemStyles.meatTypeHeader}>
            Super Family Value Packs
          </h1>
          <div className={itemStyles.items}>
            { 
              data.allContentfulDeals.edges.map((edge) => {
                if (edge.node.dealType[0] === 'SFVP'){
                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/deals/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.dealType}
                        </p>
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
        </div>
      </div>
  )
}
export default Deals