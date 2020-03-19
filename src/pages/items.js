import React, { useState, } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import itemStyles from '../pages/items.module.scss'
import Head from '../components/Head'
import Hero from '../components/Hero'
import '../styles/globals.scss'
import { Link } from 'gatsby-plugin-modal-routing'
import Searchbar from '../components/Searchbar'



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
              description
              file {
                fileName
                url
              }
              fixed {
                aspectRatio
                height
                src
                srcSet
                width
              }
              fluid {
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
      allContentfulAsset {
        edges {
          node {
            description
            title
            fixed {
              aspectRatio
              src
              srcSet
              height
              width
            }
            fluid {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  `)
  const [setSearchfield, setSearchfieldState] = useState('')
  const [setHeaderVis, setHeaderVisState] = useState(true)

  // useEffect(()=>{

  // })

  const onSearchChange = function(event) {
    setSearchfieldState(event.target.value)
    // console.log(setSearchfield.length)
    //should this go into useEffect - 1 input delay problem
    if (setSearchfield.length > 1){
      setHeaderVisState(false)
    } else {
      setHeaderVisState(true)
    }
  }

  // console.log(setSearchfield)

  return (
    <div>
      <Head title='Product List'/>
      <Hero header="Products" subHeader="Choose from a wide variety of cuts!" heroImg="item-hero"/>
      <div className='header-box'>
        <p className='pageSubHeader'>In a hurry? Our best selection is now available for viewing online!  Have a look then call your order in!</p>
        <Searchbar searchChange={onSearchChange} />
      </div>
      <div id='beef' className={itemStyles.meatContainer}>
        {
          data.allContentfulAsset.edges.map((edge) => {
            if (edge.node.title === 'cow-parts'){
              if (setHeaderVis){
                return (
                  <div className={itemStyles.meatTypeHeader}>
                    <h1>
                      Beef
                    </h1>
                    <div className={itemStyles.meatImgBox}>
                      <Img 
                        key={edge.node.title} 
                        fluid={edge.node.fluid} 
                        alt={edge.node.description}
                        />
                    </div>
                  </div>
                )
              }
            }
            return null
          })
        }
        <div className={itemStyles.items}>
          { //maps over the query using allMarkdownRemark to find .md files
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'beef'){
                if (edge.node.title.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.shortDescription.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.meatType[0].includes(setSearchfield.toLowerCase())){
                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.meatType[0].toUpperCase()}
                        </p>
                        <div className={itemStyles.imageContainer}>
                          <Img fluid={edge.node.itemImage.fluid} alt={edge.node.itemImage.description}/>
                        </div>
                        <div className={itemStyles.itemText}>
                          <h2>{edge.node.title}</h2>
                          <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                          <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        </div>
                      </Link>
                    </div>
                  )
                }
              }
              return null
            })
          }
        </div>
      </div>

      <div id='pork' className={itemStyles.meatContainer}>
        {
          data.allContentfulAsset.edges.map((edge) => {
            if (edge.node.title === 'pig-parts'){
              if (setHeaderVis){
                return (
                  <div className={itemStyles.meatTypeHeader}>
                    <h1>
                      Pork
                    </h1>
                    <div className={itemStyles.meatImgBox}>
                      <Img 
                        key={edge.node.title} 
                        fluid={edge.node.fluid} 
                        alt={edge.node.description}
                      />
                    </div>
                  </div>
                )
              }
            }
            return null
          })
        }
        <div className={itemStyles.items}>
          {
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'pork'){
                if (edge.node.title.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.shortDescription.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.meatType[0].includes(setSearchfield.toLowerCase())){
                  //SET STATE HERE TO setBeef={on}
                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.meatType[0].toUpperCase()}
                        </p>
                        <div className={itemStyles.imageContainer}>
                          <Img fluid={edge.node.itemImage.fluid} alt={edge.node.itemImage.description}/>
                        </div>
                        <div className={itemStyles.itemText}>
                          <h2>{edge.node.title}</h2>
                          <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                          <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        </div>
                      </Link>
                    </div>
                  )
                }
              }
              return null
            })
          }
        </div>
      </div>

      <div id='chicken' className={itemStyles.meatContainer}>
        {
          data.allContentfulAsset.edges.map((edge) => {
            if (edge.node.title === 'chicken'){
              if (setHeaderVis){
                return (
                  <div className={itemStyles.meatTypeHeader}>
                    <h1>
                      Chicken
                    </h1>
                    <div className={itemStyles.meatImgBox}>
                      <Img 
                        className='chicken'
                        key={edge.node.title} 
                        fluid={edge.node.fluid} 
                        alt={edge.node.description}
                      />
                    </div>
                  </div>
                )
              }
            }
            return null
          })
        }

        <div className={itemStyles.items}>
          { 
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'chicken'){
                if (edge.node.title.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.shortDescription.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.meatType[0].includes(setSearchfield.toLowerCase())){

                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.meatType[0].toUpperCase()}
                        </p>
                        <div className={itemStyles.imageContainer}>
                          <Img fluid={edge.node.itemImage.fluid} alt={edge.node.itemImage.description}/>
                        </div>
                        <div className={itemStyles.itemText}>
                          <h2>{edge.node.title}</h2>
                          <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                          <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        </div>
                      </Link>
                    </div>
                  )
                }
              }
              return null
            })
          }
        </div>
      </div>

      <div id='seafood' className={itemStyles.meatContainer}>
        {
          data.allContentfulAsset.edges.map((edge) => {
            if (edge.node.title === 'crab'){
              if (setHeaderVis){
                return (
                  <div className={itemStyles.meatTypeHeader}>
                    <h1>
                      Seafood
                    </h1>
                    <div className={itemStyles.meatImgBox}>
                      <Img 
                        className='seafood'
                        key={edge.node.title} 
                        fluid={edge.node.fluid} 
                        alt={edge.node.description}
                      />
                    </div>
                  </div>
                )
              }
            }
            return null
          })
        }

        <div className={itemStyles.items}>
          { 
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'seafood'){
                if (edge.node.title.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.shortDescription.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.meatType[0].includes(setSearchfield.toLowerCase())){

                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.meatType[0].toUpperCase()}
                        </p>
                        <div className={itemStyles.imageContainer}>
                          <Img fluid={edge.node.itemImage.fluid} alt={edge.node.itemImage.description}/>
                        </div>
                        <div className={itemStyles.itemText}>
                          <h2>{edge.node.title}</h2>
                          <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                          <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        </div>
                      </Link>
                    </div>
                  )
                }
              }
              return null
            })
          }
        </div>
      </div>

      <div id='other' className={itemStyles.meatContainer}>
        {
          data.allContentfulAsset.edges.map((edge) => {
            if (edge.node.title === 'cheese'){
              if (setHeaderVis){
                return (
                  <div className={itemStyles.meatTypeHeader}>
                    <h1>
                      Other
                    </h1>
                    <div className={itemStyles.meatImgBox}>
                      <Img 
                        className='other'
                        key={edge.node.title} 
                        fluid={edge.node.fluid} 
                        alt={edge.node.description}
                      />
                    </div>
                  </div>
                )
              }
            }
            return null
          })
        }
        <div className={itemStyles.items}>
          { 
            data.allContentfulItem.edges.map((edge) => {
              if (edge.node.meatType[0] === 'other'){
                if (edge.node.title.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.shortDescription.toLowerCase().includes(setSearchfield.toLowerCase()) 
                  || edge.node.meatType[0].includes(setSearchfield.toLowerCase())){

                  return (
                    <div key={edge.node.slug} className={itemStyles.item}>
                      <Link to={`/items/${edge.node.slug}`} asModal state={{noScroll: true}}>
                        <p className={itemStyles.meatType}>
                          {edge.node.meatType[0].toUpperCase()}
                        </p>
                        <div className={itemStyles.imageContainer}>
                          <Img fluid={edge.node.itemImage.fluid} alt={edge.node.itemImage.description}/>
                        </div>
                        <div className={itemStyles.itemText}>
                          <h2>{edge.node.title}</h2>
                          <p className={itemStyles.description}>{edge.node.shortDescription}</p>
                          <p className={itemStyles.price}>${edge.node.price} - {edge.node.pricePer}</p>
                        </div>
                      </Link>
                    </div>
                  )
                }
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