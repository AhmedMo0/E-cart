import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import ProductsList from '../components/ProductsList'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ShopNow from '../components/ShopNow'
import CategoriesPromoGrid from '../components/CategoriesPromoGrid'
import AdsBanner from '../components/AdsBanner'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import GoToTop from '../customHooks/GoToTop'
import { getFeaturedProducts } from '../Redux/actions/productsAction'

const Home = ({getFeaturedProducts , featuredProducts}) => {


  useEffect(async()=>{
   await getFeaturedProducts()
   console.log("you launched use effect");
  }, [])

  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <div className="container-lg p-0 overflow-hidden">
        <ShopNow/>
        <CategoriesPromoGrid/>
        {featuredProducts?
        <ProductsList products={featuredProducts? featuredProducts : ""} name={"Featured Products"}/>
        :
        ""
        }
        <AdsBanner/>
      </div>
      <GoToTop/>
      <Footer/>
    </div>
  )
}

const mapStateToProps = ({user, products})=>{
  console.log(products)
   return{
     user,
     featuredProducts: products.featuredProducts? products.featuredProducts : "",
   }
}

export default connect(mapStateToProps, {getFeaturedProducts})(Home)