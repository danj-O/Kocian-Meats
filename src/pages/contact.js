import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import Head from '../components/Head'
import './contact.scss'
import '../styles/globals.scss'
function Map (){
  return (
    <GoogleMap defaultZoom={15} defaultCenter={{lat: 41.516795, lng: -81.663129}}>
      <Marker position={{lat: 41.516795, lng: -81.663129}} />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const ContactPage = () => {
  return (
    <div>
      <Head title='Contact' />
      <div className='header-box'>
        <h1 className="pageHeader"> Contact </h1>
        <p className="pageSubHeader"> Call in to make orders or stop by our location! </p>
      </div>

      <div className='contact-content'>
        <ul>
          <li>Kocian Meats</li>
          <li>
            4058 St Clair Ave, Cleveland, OH 44103
          </li>
          <li>
          (216) 881-7676
          </li>
          <li>
            Hours: Tuesday - Saturday 9:30-5:30
          </li>
        </ul>
        <div>
          <WrappedMap 
            // isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD9Xdn8aWVDbWcSD1MgKf2LZeJ4vrmdpSY`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px`, width: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>

      
    </div>
  )
}
export default ContactPage