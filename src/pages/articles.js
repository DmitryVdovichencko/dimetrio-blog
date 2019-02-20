import React from "react"
import Header from "../components/header"
import {graphql} from "gatsby"


export default ({ data }) => {
   
    return(
        <div>
            <Header></Header>
            <h2>Aricles</h2>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) =>(
                
                <div key={node.id}>
                <h3>
                    {node.frontmatter.title} 
                
                </h3>
                
                <p>{node.excerpt}</p>
                </div>
            )
            )}

        </div>
        
        
    )

    }
export const query = graphql`
query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            
          }
          excerpt
        }
      }
    }
  }
`