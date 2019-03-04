
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
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `kxvpd9dxu7dt`,
              accessToken: `2fea380e5146a9a7d3b6bc9d3d1147207284764d06ef7d6b885bb3e854283c00`,
            },
          },
        `gatsby-transformer-remark`
    ],

  }