import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
{
    site {
      info: siteMetadata {
        author
        description
        title
        simplyDate
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`


const ComponentName = () => {
    const data = useStaticQuery(getData)
    console.log('data', data)

    return <div>
        <h2>{data.site.info.author}</h2>
        <p>{data.site.info.complexData.map((item, index) => {
            return <p key={index}>{item?.name} : {item?.age} </p>
        })}</p>
    </div>
}

export default ComponentName