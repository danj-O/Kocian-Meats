import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Head from '../components/Head'
import '../styles/template.scss'


export const query = graphql`
  query ($slug: String!){
    contentfulItem (slug: {eq: $slug}) {
      title
      meatType
      price
      pricePer
      fvpPrice
      fvpRange
      sfvpPrice
      sfvpRange
      boxPrice
      boxWeight
      itemImage {
        description
        fluid {
          aspectRatio
          sizes
          src
          srcSet
        }
        fixed {
          aspectRatio
          height
          src
          srcSet
          width
        }
      }
    }
  }
`

//this is the template for all blog posts
export default function Items(props) {


   // THIS WILL NEED TO CHANGE ACCORDING TO WHAT YOU ACTUALLY GET IN THE FVPs
  let fvpSave = (props.data.contentfulItem.fvpPrice !== null) 
    ? <p>FVP ${props.data.contentfulItem.fvpPrice} per lb. for {props.data.contentfulItem.fvpRange} -- SAVE ${(props.data.contentfulItem.price - props.data.contentfulItem.fvpPrice).toFixed(2)} per lb.</p>
    : <p></p>


  let sfvpSave = (props.data.contentfulItem.sfvpPrice !== null) 
    ? <p>SFVP ${props.data.contentfulItem.sfvpPrice} per lb. for {props.data.contentfulItem.sfvpRange} -- SAVE ${(props.data.contentfulItem.price - props.data.contentfulItem.sfvpPrice).toFixed(2)} per lb.</p>
    : <p></p>
    
  let boxSave = (props.data.contentfulItem.boxPrice !== null) 
    ? <p> {props.data.contentfulItem.boxWeight}lb. Box ${props.data.contentfulItem.boxPrice} -- ${(props.data.contentfulItem.boxPrice / props.data.contentfulItem.boxWeight).toFixed(2)} lb.</p>
    : <p></p>


  return (
    <div>
      <Head title={props.data.contentfulItem.title} />
      <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
          <div className='content'>
            {modal ? (
              <div className='close-btn-box'>
                <Link to={closeTo} state={{noScroll: true}}>
                  X
                </Link>
              </div>
            ) : (
              <header>
                <h1>
                  <Link to="/items">Go back to Products</Link>
                </h1>
              </header>
            )}
            <div className='content-container'>
              <p className='meatType'>
                {props.data.contentfulItem.meatType}
              </p>
              <div className='big-box'>
                <div className='image-container'>
                  {/* <Img 
                    fluid={props.data.contentfulItem.itemImage.fluid}
                    alt={props.data.contentfulItem.itemImage.description}
                  /> */}
                </div>
                <div className='content-text'>
                  <h1>{ props.data.contentfulItem.title }</h1>
                  {/* <div className='description'>
                    {documentToReactComponents(props.data.contentfulItem.description.json)}
                  </div> */}
                  <div className='price'>
                    <p>
                      ${props.data.contentfulItem.price} - {props.data.contentfulItem.pricePer}
                    </p>
                    {fvpSave}
                    {sfvpSave}
                    {boxSave}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ModalRoutingContext.Consumer>
    </div>
  )
}