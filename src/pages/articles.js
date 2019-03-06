import React from "react"
import Header from "../components/header"
import {Link,graphql} from "gatsby"


export default ({ data }) => {
   
    return(
        <div>
            <Header></Header>
            
   
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
          fields {            
              slug          
            }
          excerpt
        }
      }
    }
  }
`