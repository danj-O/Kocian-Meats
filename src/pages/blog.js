import React from 'react'
import Hero from '../components/Hero'
import { Link, useStaticQuery, graphql } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/Head'
import '../styles/globals.scss'




const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog (sort: {fields: publishedDate,order: DESC}){
        edges {
          node {
            name
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Head title='Blog'/>
      <Hero heroImg='blog-hero.jpg' />
      <div className='header-box'>
        <h1 className="pageHeader"> Blog</h1>
        <p className="pageSubHeader">Check here for cool stuff weekly!</p>
      </div>
      <ol className={blogStyles.posts}>
        { //maps over the query using allMarkdownRemark to find .md files
        data.allContentfulBlog.edges.map((edge) => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>
                  {/* make dynamic link to blog post */}
                    {edge.node.name}
                </h2>
                <p>
                  {edge.node.publishedDate}
                </p>
              </Link>
            </li>
          )
        })
        }
      </ol>
    </div>
  )
}
export default BlogPage