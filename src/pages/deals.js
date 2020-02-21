import React from "react"
import Layout from '../components/Layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import dealsStyles from './deals.module.scss'
import Head from '../components/Head'

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
    <div>
      <Layout>
        <Head title="home"/>
        <h1> Our specials! </h1>
        <h2>Updated daily with our juiciest deals</h2>

        <div className={dealsStyles.deals}>
        { //maps over the query using allMarkdownRemark to find .md files
        data.allContentfulDeals.edges.map((edge) => {
          return (
            <div key={edge.node.slug} className={dealsStyles.deal}>
              <Link to={`/deals/${edge.node.slug}`}>
                <h2>
                  {/* make dynamic link to blog post */}
                    {edge.node.name}
                </h2>
                <p>{edge.node.shortDescription}</p>
                <div>
                  <div>
                    <p>${edge.node.price} - {edge.node.pricePer}</p>
                  </div>
                  <div>
                    <img src={edge.node.dealsImage.file.url} alt=""/>
                  </div>
                </div>
              </Link>
            </div>
          )
        })
        }
      </div>

      </Layout>
    </div>
  )
}
export default Deals