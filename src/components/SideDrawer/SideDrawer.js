import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import './SideDrawer.scss'


export default function SideDrawer(props) {
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
            file {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <nav className={drawerClasses}>
      <div className='side-drawer-logo'>
        {
          data.allContentfulAsset.edges.map((edge) => {
            if (edge.node.title === "logo"){     
              return (<img key={edge.node.title} src={edge.node.file.url} alt=""/>)
            }
            return null
          })
        }
      </div>
      <ul className=''>
        <li>        
          <Link className='cat' activeClassName='' to='/'>Home</Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/items'>Products</Link>
        </li>
        <li>
          <Link className='subCat' activeClassName='' to='/items#beef'>Beef</Link>
        </li>
        <li>
          <Link className='subCat' activeClassName='' to='/items#pork'>Pork</Link>
        </li>
        <li>
          <Link className='subCat' activeClassName='' to='/items#chicken'>Chicken</Link>
        </li>
        <li>
          <Link className='subCat' activeClassName='' to='/items#seafood'>Seafood</Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/deals'> Deals </Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/about'>About</Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/blog'>Blog</Link>
        </li>
        <li>
          <Link className='cat' activeClassName='' to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
