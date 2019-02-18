
  module.exports = {
    siteMetadata: {    
        title: `Pandas Eating Lots`,  
    },
    plugins:[
        'gatsby-plugin-sass',
        {     
            resolve: `gatsby-source-filesystem`,
            options: {        
                name: `src`,        
                path: `${__dirname}/src/`,
            },    
        }
    ],

  }