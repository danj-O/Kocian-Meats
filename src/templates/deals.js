import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'


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
  // const options = {
  //   renderNode: {
  //     //override specific node types
  //     "embedded-asset-block": (node)=>{
  //       //PROBLEM!!!!!!------------
  //       //Where should the query go to find these two in playground??!!
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       console.log(alt, url)
  //       return <img alt={alt} src={url}/>
  //     }
  //   }
  // }
  return (
    <Layout>
      <Head title={props.data.contentfulDeals.title} />
      <h1>{ props.data.contentfulDeals.name }</h1>
      <p>{ props.data.contentfulDeals.shortDescription }</p>
      <img src={props.data.contentfulDeals.dealsImage.file.url} alt={props.data.contentfulDeals.dealsImage.file.fileName}/>
      {/* <img src={props.data.contentfulAsset.file.url} alt=""/> */}
      {/* {documentToReactComponents(props.data.contentfulItem.description.json)} */}
    </Layout>
  )
}