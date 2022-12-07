import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ProductsComp from '../components/ProductsComp'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <ProductsComp/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home