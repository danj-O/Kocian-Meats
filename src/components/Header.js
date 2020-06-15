import React, { useState, } from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import headerStyles from './header.module.scss'
import DrawerButton from '../components/SideDrawer/DrawerButton'
import DropdownMenu from './dropdown-menu/DropdownMenu'



export default function Header(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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

  const [isShown, setIsShown] = useState(false)

  // const handleMouseOver = () => {
  //   setDropDownState(true)
  //   console.log('yep', setDropDown)
  // }

  // const handleMouseLeave = () => {
  //   setDropDownState(false)
  //   console.log(setDropDown)
  // }

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navigation}>
        <div>
          <DrawerButton click={props.drawerClickHandler} />
        </div>
        <h1>
          <Link className={headerStyles.title} to='/'>
            {/* {data.site.siteMetadata.title} */}
            <div className={headerStyles.logo}>
              {
                data.allContentfulAsset.edges.map((edge) => {
                  if (edge.node.title === "old-logo"){     
                    return (<Img key={edge.node.title} fluid={edge.node.fluid} alt={edge.node.description}/>)
                  }
                return null
                })
              }
            </div>
          </Link>
        </h1>
        <div className={headerStyles.spacer} />
        <div className={headerStyles.navItems}>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
            </li>
            <li 
              onMouseEnter={()=> setIsShown(true)} 
              onMouseLeave={() => setIsShown(false)}
            >
              <Link 
                className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to='/items' 
                
              >
                Products
              </Link>
              <div className={headerStyles.dropdown}>
                {
                  isShown 
                  ? <DropdownMenu /> 
                  : null
                }
              </div>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/deals'> Specials </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
            </li>
            {/* <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link>
            </li> */}
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
