import React from 'react'
import Layout from '../Components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import Recipes from '../Components/RecipesList'
import SEO from '../Components/SEO'

export default function about({ data }) {

    const recipes = data?.allContentfulRecipe?.nodes

    return (
        <Layout>
            <SEO title='About Page' />
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>
                            I'm baby coloring book poke taxidermy
                        </h2>
                        <p>
                            Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.
                        </p>
                        <p>
                            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
                        </p>
                        <Link to='/contact' className='btn'>
                            contact
                        </Link>
                    </article>
                    <StaticImage
                        src='../assets/images/about.jpeg'
                        alt='Person puring salt in bowl'
                        className="about-img"
                        placeholder="tracedSVG"
                    />
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesouce</h5>
                    <Recipes recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`