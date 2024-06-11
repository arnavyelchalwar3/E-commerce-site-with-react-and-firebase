import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/Herosection/HeroSection'
import Cartegory from '../../Components/Cartegory/cartegory'
import HomePageProductCard from '../../Components/HomePageProductCard/HomePageProductCard'
import Track from '../../Components/Track/Track'  
import Testimonial from '../../Components/Testimonial/Testimonial'
const Home = () => {
  return (
    <Layout>
        <HeroSection/>
      <Cartegory/>
    <HomePageProductCard/>
    <Track/>
    <Testimonial/>
    
    </Layout>
    
  )
}

export default Home