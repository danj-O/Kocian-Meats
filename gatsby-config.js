/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * CHECK DOCS ON ALL PLUGINS!
 */

module.exports = {
  siteMetadata : {
    //this will be used for header and footer text
    title: 'Kocian Meats & Marketplace | #1 meat market in NE Ohio| Cleveland',
    author: 'Daniel Scott',
    description: `Northeast Ohio's premier meat market. Conveniently located in downtown Cleveland.  Sign up for our newsletter to get special deals on the products you love!`
  },
  plugins : [
    // this plugin wraps the layout file around pages
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/Layout'),
      },
    },
    {
      //router for all items' modals
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          className: "container",
          overlayClassName: "overlayContainer"
        },
      }
    },
    //this places our react-helmet <head> files into the statically generated pages
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.kocianmeats.com`,
      },
    },
    {
      //contentful plugin
      resolve : 'gatsby-source-contentful',
      options : {
        //these are put in the .env file
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    // sass plugin for scss files and modules
    'gatsby-plugin-sass',
    {
      //sources information from the filesystem (.md files for ex)
      resolve : 'gatsby-source-filesystem',
      //can see options for all in docs!
      options : {
        name : 'src',
        path : `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      //tranformer remark parses markdown files with remark
      resolve : 'gatsby-transformer-remark',
      options: {
        plugins : [
          // helper plugin for remark images? convert image srcs to be relative to parent dir
          'gatsby-remark-relative-images',
          {
            //processes images in md to be used --- LOTS of good options for loading images properly and quickly from md
            resolve : 'gatsby-remark-images',
            options : {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
