import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          person {
            name
            age
          }
          complexData {
            age
          }
          author
          description
        }
      }
    }
  `)
    return <h1>{data?.site?.siteMetadata?.author}</h1>
}

export default ComponentName
