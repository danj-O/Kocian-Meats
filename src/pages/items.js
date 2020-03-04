import React from 'react'
// import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import itemStyles from '../pages/items.module.scss'
import Head from '../components/Head'
import Hero from '../components/Hero'
import '../styles/globals.scss'
import { Link } from 'gatsby-plugin-modal-routing'



const ItemsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulItem {
        edges {
          node {
            meatType
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
    <div>
      <Head title='Product List'/>
      <Hero header="Products" subHeader="Our meats are simply the best!" heroImg="item-hero"/>
      <div className='header-box'>
        <h1 className='pageHeader'> Products</h1>
        <p className='pageSubHeader'>In a hurry? Our best selection is now available for preorder/prepay right here!</p>
      </div>
      <div className={itemStyles.meatContainer}>
        <h1 id='beef'>
          Beef
        </h1>
        <div className={itemStyles.items}>
          { //maps over the query using allMarkdownRemark to find .md files
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'beef'){
                return (
                  <div key={edge.node.slug} className={itemStyles.item}>
                    <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                      <div className={itemStyles.imageContainer}>
                        <img src={edge.node.itemImage.file.url} alt=""/>
                      </div>
                      <div className={itemStyles.itemText}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.shortDescription}</p>
                        <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        <p>
                          {edge.node.meatType}
                        </p>
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
        <h1 id='pork'>
          Pork
        </h1>
        <div className={itemStyles.items}>
          {
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'pork'){
                return (
                  <div key={edge.node.slug} className={itemStyles.item}>
                    <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                      <div className={itemStyles.imageContainer}>
                        <img src={edge.node.itemImage.file.url} alt=""/>
                      </div>
                      <div className={itemStyles.itemText}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.shortDescription}</p>
                        <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        <p>
                          {edge.node.meatType}
                        </p>
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
        <h1 id='chicken'>
          Chicken
        </h1>
        <div className={itemStyles.items}>
          { 
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'chicken'){
                return (
                  <div key={edge.node.slug} className={itemStyles.item}>
                    <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                      <div className={itemStyles.imageContainer}>
                        <img src={edge.node.itemImage.file.url} alt=""/>
                      </div>
                      <div className={itemStyles.itemText}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.shortDescription}</p>
                        <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        <p>
                          {edge.node.meatType}
                        </p>
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
        <h1 id='seafood'>
          Seafood
        </h1>
        <div className={itemStyles.items}>
          { 
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'seafood'){
                return (
                  <div key={edge.node.slug} className={itemStyles.item}>
                    <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                      <div className={itemStyles.imageContainer}>
                        <img src={edge.node.itemImage.file.url} alt=""/>
                      </div>
                      <div className={itemStyles.itemText}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.shortDescription}</p>
                        <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        <p>
                          {edge.node.meatType}
                        </p>
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
        <h1 id='other'>
          Other
        </h1>
        <div className={itemStyles.items}>
          { 
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'other'){
                return (
                  <div key={edge.node.slug} className={itemStyles.item}>
                    <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                      <div className={itemStyles.imageContainer}>
                        <img src={edge.node.itemImage.file.url} alt=""/>
                      </div>
                      <div className={itemStyles.itemText}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.shortDescription}</p>
                        <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        <p>
                          {edge.node.meatType}
                        </p>
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
export default ItemsPage