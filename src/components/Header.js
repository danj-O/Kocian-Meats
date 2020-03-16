import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from './header.module.scss'
import DrawerButton from '../components/SideDrawer/DrawerButton'



export default function Header(props) {
//   const data = useStaticQuery(graphql`
//   query {
//     allContentfulAsset {
//       edges {
//         node {
//           title
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `)
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
          file {
            url
          }
        }
      }
    }
  }
  `)

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
                    return (<img key={edge.node.title} src={edge.node.file.url} alt={edge.node.description}/>)
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
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/items'>Products</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/deals'> Deals </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
