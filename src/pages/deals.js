import React from "react"
// import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import itemStyles from './items.module.scss'
import Head from '../components/Head'
import Hero from '../components/Hero'
import '../styles/globals.scss'
import { Link } from 'gatsby-plugin-modal-routing'
import './deals.scss'
import MeatSection from "../components/meat-section/MeatSection"



export default function Deals(props) {
  console.log("path",props.path)

  // console.log(props.special)
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
            Like these great specials?<Link to="/deals#subscribe">Sign up</Link> for our mailing list to be the first to hear about them!
          </p>
        </div>


        <div className={itemStyles.meatContainer}>
          <div className={itemStyles.items}>
            <MeatSection title="Specials" meatData={props.data.deals} isSpecial linkFolder={props.path}/>
            {/* { 
              props.data.deals.edges.map((edge) => {
                console.log(edge)
                  return (
                    <MeatSection title="Specials" meatData={edge.node} />
                    // <div key={edge.node.slug} className={itemStyles.item}>
                    //   <Link to={`/deals/${edge.node.slug}`} asModal state={{noScroll: true}}>
                    //     <div className={itemStyles.imageContainer}>
                    //       <img src={edge.node.dealsImage.file.url} alt={edge.node.dealsImage.description}/>
                    //     </div>
                    //     <div className={itemStyles.itemText}>
                    //       <h2>{edge.node.name}</h2>
                    //       <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                    //       <p className={itemStyles.price}>${edge.node.price} / {edge.node.pricePer}</p>
                    //       <p className={itemStyles.price}>{edge.node.priceRange}</p>
                    //     </div>
                    //   </Link>
                    // </div>
                  )
              })
            } */}
          </div>
        </div>
      </div>
  )
}

export const query = graphql`
  query {
    deals: allContentfulDeals {
        edges {
          node {
            id
            name
            slug
            shortDescription
            price
            pricePer
            priceRange
            dealsImage {
              description
              file {
                fileName
                url
              }
            }
          }
        }
      }
  }
`

// export default Deals