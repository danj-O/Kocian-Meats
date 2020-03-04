import React from 'react'
// import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import '../styles/template.scss'


export const query = graphql`
  query ($slug: String!){
    contentfulDeals (slug: {eq: $slug}) {
      name
      price
      pricePer
      shortDescription
      dealsImage {
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
              <Link to={closeTo} state={{noScroll: true}}>
                Close
              </Link>
            ) : (
              <header>
                <h1>
                  <Link to="/deals">Go back to our specials</Link>
                </h1>
              </header>
            )}
            <div>
              <h1>{ props.data.contentfulDeals.name }</h1>
              <p>{ props.data.contentfulDeals.shortDescription }</p>
              <div className='image-container'>
                <img src={props.data.contentfulDeals.dealsImage.file.url} alt={props.data.contentfulDeals.dealsImage.file.fileName}/>
              </div>
            </div>
          </div>
        )}       
      </ModalRoutingContext.Consumer>
    </div>
  )
}