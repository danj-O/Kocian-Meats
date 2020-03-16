import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import '../styles/template.scss'


export const query = graphql`
  query ($slug: String!){
    contentfulDeals (slug: {eq: $slug}) {
      name
      price
      pricePer
      dealType
      shortDescription
      description {
        json
      }
      dealsImage {
        description
        file {
          fileName
          url
          
        }
      }
    }
  }
`


//this is the template for all blog posts
export default function Projects(props) {

  return (
    <div>
      <Head title={props.data.contentfulDeals.title} />
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
                  <Link to="/deals">Go back to our specials</Link>
                </h1>
              </header>
            )}
            <div className='content-container'>
              <p className='meatType'>
                {props.data.contentfulDeals.dealType}
              </p>
              <div className='big-box'>
                <div className='image-container'>
                  <img src={props.data.contentfulDeals.dealsImage.file.url} alt={props.data.contentfulDeals.dealsImage.description}/>
                </div>
                <div className='content-text'>
                  <h1>{ props.data.contentfulDeals.name }</h1>
                  <div className='description'>
                    {documentToReactComponents(props.data.contentfulDeals.description.json)}
                  </div>
                  <p className='price'>
                    Just ${props.data.contentfulDeals.price} / {props.data.contentfulDeals.pricePer}
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