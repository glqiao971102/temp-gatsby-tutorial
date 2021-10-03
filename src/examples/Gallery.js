import React from 'react'
import { graphql, useStaticQuery, } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        size
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: TRACED_SVG
            width: 200
            height: 200
          )
        }
      }
    }
  }
  `

const Gallery = () => {

    const data = useStaticQuery(query)
    const nodes = data.allFile.nodes
    console.log('data', data)
    console.log('nodes', nodes)

    return (
        <div>
            {nodes.map((image, index) => {
                const { name } = image
                //getImage will help me auto childImageSharp, becareful not wrong pathname 
                const pathToImage = getImage(image)
                return (
                    <article key={index}>
                        <GatsbyImage
                            image={pathToImage}
                            alt={name}
                        />
                    </article>
                )
            })}
        </div>
    )
}

export default Gallery
