import React from "react"
import Layout from '../components/Layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import itemStyles from './items.module.scss'
import Head from '../components/Head'
import '../styles/globals.scss'


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
      <Layout>
        <Head title="home"/>
        <h1 className="pageHeader"> Our specials! </h1>
        <p className="pageSubHeader">Updated daily with our juiciest deals</p>

        <div className={itemStyles.items}>
        { 
          data.allContentfulDeals.edges.map((edge) => {
            return (
              <div key={edge.node.slug} className={itemStyles.item}>
                <Link to={`/deals/${edge.node.slug}`}>
                  <div>
                    <img src={edge.node.dealsImage.file.url} alt=""/>
                  </div>
                  <div className={itemStyles.itemText}>
                    <h2>{edge.node.name}</h2>
                    <p>{edge.node.shortDescription}</p>
                    <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      </Layout>
  )
}
export default Deals