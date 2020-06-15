import React from 'react'
import { Link, graphql } from 'gatsby'

import MeatSection from '../components/meat-section/MeatSection'
import Head from '../components/Head'
import Hero from '../components/Hero'

import './items.styles.scss'

export default function Items(props) {
  // console.log("path",props.path)
  return (
    <div className='items-container'>
      <Head title="Items"/>
      {/* <Hero header="Welcome To Kocian Meats" subHeader='Since 1922' heroImg='item-hero'/> */}
      <div className='section-links'>
        <div className='section-links-header'>Sections</div>
        <ul>
          <li><Link to='/items#beef-steak'><p>Beef Steak</p></Link></li>
          <li><Link to='/items#beef-roast'><p>Beef Roast</p></Link></li>
          <li><Link to='/items#beef-ground'><p>Beef Ground</p></Link></li>
          <li><Link to='/items#beef-other'><p>Beef Other</p></Link></li>
          <li><Link to='/items#pork'><p>Pork</p></Link></li>
          <li><Link to='/items#pork-smoked'><p>Pork Smoked</p></Link></li>
          <li><Link to='/items#pork-bacon'><p>Pork Bacon</p></Link></li>
          <li><Link to='/items#pork-other'><p>Pork Other</p></Link></li>
          <li><Link to='/items#poultry'><p>Poultry</p></Link></li>
          <li><Link to='/items#seafood'><p>Seafood</p></Link></li>
          <li><Link to='/items#deli'><p>Deli Meats & Cheeses</p></Link></li>
          <li><Link to='/items#weiners'><p>Wieners</p></Link></li>
          <li><Link to='/items#lamb'><p>Lamb & Veal</p></Link></li>
          <li><Link to='/items#other'><p>Other</p></Link></li>
        </ul>
      </div>
      <div className='value-descriptions'>
        <div>
          <p>Standard</p>
          <p>For small purchases.</p>
        </div>
        <div>
          <p>Family Value Pack</p>
          <p>Usually 4-8 lbs.</p>
        </div>
        <div>
          <p>Super Family Value Pack</p>
          <p>Usually 8-12 lbs.</p>
        </div>
        <div>
          <p>Bargain Box</p>
          <p>Usually 15-50 lbs. & the best bargain.</p>
        </div>
      </div>
      <MeatSection title='Beef Steaks' meatData={props.data.beefSteak} linkFolder={props.path}/>
      <MeatSection title='Beef Roasts' meatData={props.data.beefRoast} linkFolder={props.path}/>
      <MeatSection title='Beef Grinds' meatData={props.data.beefGround} linkFolder={props.path}/>
      <MeatSection title='Beef Other' meatData={props.data.beefOther} linkFolder={props.path}/>

      <MeatSection title='Pork' meatData={props.data.pork} linkFolder={props.path}/>
      <MeatSection title='Smoked Pork' meatData={props.data.porkSmoked} linkFolder={props.path}/>
      <MeatSection title='Pork Bacon' meatData={props.data.porkBacon} linkFolder={props.path}/>
      <MeatSection title='Pork Offals' meatData={props.data.porkOther} linkFolder={props.path}/>

      <MeatSection title='Poultry' meatData={props.data.poultry} linkFolder={props.path}/>

      <MeatSection title='Seafood' meatData={props.data.seafood} linkFolder={props.path}/>

      <MeatSection title='Deli Meats & Cheeses' meatData={props.data.deli} linkFolder={props.path}/>

      <MeatSection title='Wieners' meatData={props.data.weiners} linkFolder={props.path}/>

      <MeatSection title='Lamb & Veal' meatData={props.data.lamb} linkFolder={props.path}/>

      <MeatSection title='Other' meatData={props.data.other} linkFolder={props.path}/>
    </div>
  )
}

export const query = graphql`
  query {
    beefSteak: allContentfulItem(filter: {meatType: {eq: "beef-steak"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    beefRoast: allContentfulItem(filter: {meatType: {eq: "beef-roast"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    beefGround: allContentfulItem(filter: {meatType: {eq: "beef-ground"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    beefOther: allContentfulItem(filter: {meatType: {eq: "beef-other"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }


    pork: allContentfulItem(filter: {meatType: {eq: "pork"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    porkSmoked: allContentfulItem(filter: {meatType: {eq: "pork-smoked"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    porkBacon: allContentfulItem(filter: {meatType: {eq: "pork-bacon"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    porkOther: allContentfulItem(filter: {meatType: {eq: "pork-other"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
    


    poultry: allContentfulItem(filter: {meatType: {eq: "poultry"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }


    seafood: allContentfulItem(filter: {meatType: {eq: "seafood"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }


    deli: allContentfulItem(filter: {meatType: {eq: "deli"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }


    lamb: allContentfulItem(filter: {meatType: {eq: "lamb"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }


    weiners: allContentfulItem(filter: {meatType: {eq: "weiners"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }

    
    other: allContentfulItem(filter: {meatType: {eq: "other"}}) {
      edges {
        node {
          meatType title slug price pricePer fvpPrice fvpRange sfvpPrice sfvpRange boxPrice boxWeight id
          itemImage {
            description file {fileName url}
            fixed {aspectRatio height src srcSet width}
            fluid {aspectRatio sizes src srcSet}
          }
        }
      }
    }
  }
`