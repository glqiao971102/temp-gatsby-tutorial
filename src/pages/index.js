import React from "react"
import Layout from '../Components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import FetchData from '../examples/fetchData'
import AllRecipes from '../Components/AllRecipes'
import SEO from '../Components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title='Home Page' description="This is home page" />
      <main className='page'>
        <header className='hero'>
          {/* <img src={image} /> */}
          <StaticImage
            src='../assets/images/main.jpeg'
            alt='eggs'
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
          />

          <div className='hero-container'>
            <div className='hero-text'>
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>


        </header>
        <AllRecipes />
      </main>

    </Layout>
  )
}


