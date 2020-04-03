import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Subscribe from '../subscribe/Subscribe'


import './SideDrawer.scss'


export default function SideDrawer(props) {
  let path = typeof window !== 'undefined' && window.location.pathname
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            title
            description
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
    // console.log('sidrawer LOC',path)
  return (
    <nav className={drawerClasses}>
      <div className='close-btn' onClick={props.click} onKeyDown={props.click}>
        <p>x</p>
      </div>
      <div className='side-drawer-logo-container'>
        <div className='side-drawer-logo'>
          {
            data.allContentfulAsset.edges.map((edge) => {
              if (edge.node.title === "logo"){     
                return (<Img key={edge.node.title} fluid={edge.node.fluid} alt={edge.node.description}/>)
              }
              return null
            })
          }
        </div>
      </div>
      <ul className='bigList'>
        <li>        
          <Link className='cat' activeClassName='' to='/'>
            {/* <span>o</span> */}
            <div>
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/items'>
            <div>
              Products *
            </div>
          </Link>
        </li>

            <li 
              className= {` ${path === '/items' ? 'show': 'hide'}`}>
              <ul className="subCat-grp">
                <li>
                  <Link className='subCat' activeClassName='' to='/items#beef'>
                    <div>
                      Beef
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='subCat' activeClassName='' to='/items#pork'>
                    <div>
                      Pork
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='subCat' activeClassName='' to='/items#poultry'>
                    <div>
                      Poultry
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='subCat' activeClassName='' to='/items#seafood'>
                    <div>
                      Seafood
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='subCat' activeClassName='' to='/items#deli'>
                    <div>
                      Deli Meats
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='subCat' activeClassName='' to='/items#other'>
                    <div>
                      Other
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

        <li>
          <Link className='cat' activeClassName='' to='/deals'>
            <div>
              Deals
            </div>
          </Link>
        </li>

        {/* <li className= {` ${path === '/deals' ? 'show': 'hide'}`}>
          <ul className="subCat-grp">
            <li>
              <Link className='subCat' activeClassName='' to='/deals#fvp'>
                <div>
                  FVP
                </div>
              </Link>
            </li>
            <li>
              <Link className='subCat' activeClassName='' to='/deals#sfvp'>
                <div>
                  Super FVP
                </div>
              </Link>
            </li>
          </ul>
        </li> */}


        <li>
          <Link className='cat' activeClassName='' to='/about'>
            <div>
              About
            </div>
          </Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/blog'>
            <div>
              Blog
            </div>
          </Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/contact'>
            <div>
              Contact
            </div>
          </Link>
        </li>
      </ul>
      <div className='subscribe-box'>
        <p>
          Subscribe to Kocian Meats Newsletter for special deals!
        </p>
        <Subscribe />
      </div>
    </nav>
  )
}
