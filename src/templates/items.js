import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
      description {
        json
      }
      itemImage {
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
                  <Img 
                    fluid={props.data.contentfulItem.itemImage.fluid}
                  />
                </div>
                <div className='content-text'>
                  <h1>{ props.data.contentfulItem.title }</h1>
                  <div className='description'>
                    {documentToReactComponents(props.data.contentfulItem.description.json)}
                  </div>
                  <p className='price'>
                    ${props.data.contentfulItem.price} - {props.data.contentfulItem.pricePer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </ModalRoutingContext.Consumer>
    </div>
  )
}