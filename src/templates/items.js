import React from 'react'
// import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
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
        file {
          fileName
          url
          
        }
      }
    }
  }
`
// const modalStyles = {
//   background: '#000',
//   // width: 200px,
// }

//this is the template for all blog posts
export default function Items(props) {

  return (
    <div>
      <Head title={props.data.contentfulItem.title} />
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
                  <Link to="/items">Go back to Products</Link>
                </h1>
              </header>
            )}
            <div>
              <h1>{ props.data.contentfulItem.title }</h1>
              <div className='image-container'>
                <img src={props.data.contentfulItem.itemImage.file.url} alt={props.data.contentfulItem.itemImage.fileName}/>
              </div>
              {documentToReactComponents(props.data.contentfulItem.description.json)}
            </div>
          </div>
        )}
      </ModalRoutingContext.Consumer>
    </div>
  )
}