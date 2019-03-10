const path = require(`path`);
  const createFilePath=(caption) => String(caption).toLowerCase().replace( / /g, "-" );
  

//   exports.onCreateNode = ({ node }) => {
//     if (node.internal.type === `ContentfulPost`) {
//       console.log(createFilePath(node.caption));
//     }
//   }

  exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `ContentfulPost`) {
      const slug = createFilePath(node.caption);
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions  
    return graphql(`
    {
      allContentfulPost{
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }
    `)
    .then(result => {
      result.data.allContentfulPost.edges.forEach(({ node }) => {      
        createPage({        
          path: node.fields.slug,        
          component: path.resolve(`./src/templates/blog-post.js`),        
          context: {          
            // Data passed to context is available          
            // in page queries as GraphQL variables.          
            slug: node.fields.slug,        
          },      
        })    
      })  
    })
  }