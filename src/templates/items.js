import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'


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


//this is the template for all blog posts
export default function Items(props) {

  return (
    <Layout>
      <Head title={props.data.contentfulItem.title} />
      <h1>{ props.data.contentfulItem.title }</h1>
      {/* <p>{ props.data.contentfulProjects.datePublished }</p> */}
      <img src={props.data.contentfulItem.itemImage.file.url} alt={props.data.contentfulItem.itemImage.fileName}/>
      {/* <img src={props.data.contentfulAsset.file.url} alt=""/> */}
      {documentToReactComponents(props.data.contentfulItem.description.json)}
    </Layout>
  )
}