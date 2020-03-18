import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import '../styles/globals.scss'
import './about.scss'



const AboutPage = () => {
  return (
    <div>
        <Head title='About' />
        {/* <Hero heroImg="about-hero"/> */}
      <div className='about-content'>
        <div className='header-box'>
          <h1 className="pageHeader"> The story of Kocian Meats </h1>
          <p className="pageSubHeader">Since 1922!</p>
        </div>
        <p className='about-p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed porro iure repellendus atque nam explicabo, aperiam vel magnam tempore dolores perspiciatis vero voluptatibus temporibus aliquam odio obcaecati ad. Officiis, eius!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum sapiente id veritatis vel temporibus exercitationem cupiditate veniam nobis. Maiores repudiandae distinctio architecto doloribus libero doloremque fugiat facere consequatur veritatis?

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusamus cumque quas nobis, natus alias sequi laudantium dignissimos, suscipit eligendi magnam sed voluptatum quisquam nostrum, vel praesentium est minima. Neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam neque architecto voluptatibus ex, minima sunt vitae magni officia omnis temporibus ea odit quo dicta accusamus ipsa incidunt ipsam perferendis?
        </p>
      </div>
    </div>
  )
}
export default AboutPage