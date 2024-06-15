import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/Herosection/HeroSection'
import Cartegory from '../../Components/Cartegory/cartegory'
import HomePageProductCard from '../../Components/HomePageProductCard/HomePageProductCard'
import Track from '../../Components/Track/Track'  
import Testimonial from '../../Components/Testimonial/Testimonial'
import Loader from '../../Components/loader/loader'

const Home = () => {
  
  return (
    <Layout>
        <HeroSection/>
      <Cartegory/>
    <HomePageProductCard/>
    <Track/>
    <Testimonial/>
    <Loader/>
    </Layout>
    
  )
}

export default Home