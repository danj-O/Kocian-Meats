import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)
  return (
    <footer className='footer'>
      <div className='foot-head'>
          <p>
            To make orders, simply call us up and tell us what time you would like your order to be ready for pickup!
          </p>
          <p>
            For customized and wholesale ordering, please call or send and email.
          </p>
          <ul className='social-links'>
            <li> 
              <a href="tel:2168817676">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
            <li>
            <a href="mailto:info@kocianmeats.com?Subject=Special%20order" target="_top">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </li>
            <li>
              <a href="https://www.facebook.com/kocianmeats/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/kocianmeats/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
      </div>
      <div className='footer-box'>
        <ul>
          <li className='foot-sub-head'>Address</li>
          <li>4058 St Clair Ave</li>
          <li>Cleveland, OH 44103</li>
          <li> (216) 881-7676 </li>
          <li> info@kocianmeats.com </li>
        </ul>
        <ul>
          <li className='foot-sub-head'>Hours</li>
          <li>Sunday and Monday: Closed</li>
          <li>Tuesday - Saturday: 9:30-5:30</li>
        </ul>
        <div id="subscribe" className='subscribe-box'>
          <p>
            Subscribe to our mailing list to get exclusive deals!
          </p>
          <input type="text"/>
        </div>
        <ul className='bigList'>
          <li>        
            <Link className='cat' activeClassName='' to='/'>
              <div>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link className='cat' activeClassName='' to='/items'>
              <div>
                Products
              </div>
            </Link>
          </li>
          <li>
            <Link className='cat' activeClassName='' to='/deals'>
              <div>
                Deals
              </div>
            </Link>
          </li>
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
        <div>
        
        </div>
      </div>
      <p className='created-by'>Kocian Meats |  © 2020 Site by {data.site.siteMetadata.author}</p>
    </footer>
  )
}
