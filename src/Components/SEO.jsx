import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title, description }) {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

    const metaDescription = description || data?.site?.siteMetadata?.description

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={`${title} | ${data?.site?.siteMetadata?.title}`}
            meta={[{ name: 'data', content: metaDescription }]}
        />
    )
}

export default SEO
