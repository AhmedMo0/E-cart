import React from 'react'
import Announcement from '../components/Announcement'
import ProductsList from '../components/ProductsList'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ShopNow from '../components/ShopNow'
import CategoriesPromoGrid from '../components/CategoriesPromoGrid'
import AdsBanner from '../components/AdsBanner'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Slider/>
      <div className="container-lg p-0 overflow-hidden">
        <ShopNow/>
        <CategoriesPromoGrid/>
        <ProductsList/>
        <AdsBanner/>
      </div>
    </div>
  )
}

export default Home