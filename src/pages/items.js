import React from 'react'
import Layout from '../components/Layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import itemStyles from '../pages/items.module.scss'
import Head from '../components/Head'
import '../styles/globals.scss'



const ItemsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulItem {
        edges {
          node {
            title
            slug
            shortDescription
            price
            pricePer
            description {
              json
            }
            itemImage {
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

  return (
    <Layout>
      <Head title='Product List'/>
      <h1 className='pageHeader'> Products</h1>
      <p className='pageSubHeader'>In a hurry? Our best selection is now available for preorder/prepay right here!</p>
      <div className={itemStyles.items}>
        { //maps over the query using allMarkdownRemark to find .md files
        data.allContentfulItem.edges.map((edge) => {
          return (
            <div key={edge.node.slug} className={itemStyles.item}>
              <Link to={`/items/${edge.node.slug}`}>
                <div>
                  <img src={edge.node.itemImage.file.url} alt=""/>
                </div>
                <div className={itemStyles.itemText}>
                  <h2>{edge.node.title}</h2>
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
export default ItemsPage