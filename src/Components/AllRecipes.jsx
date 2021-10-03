import React from 'react'
import Taglist from './Tags'
import RecipesList from './RecipesList'
import { graphql, useStaticQuery } from 'gatsby'



function AllRecipes() {

  const data = useStaticQuery(graphql`
    {
        allContentfulRecipe {
          nodes {
            title
            id
            prepTime
            cookTime
            image {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
            content {
              tags
            }
          }
        }
      }
  `)

  const recipes = data.allContentfulRecipe.nodes
  console.log('recipes', recipes)

  return (
    <section className='recipes-container'>
      <Taglist recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
