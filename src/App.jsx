import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Products/products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import DarkMode from './components/DarkMode';



const App = () => {
  React.useEffect (()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-line",
      delay:100,

    })
    AOS.refresh();
  },[])
  return (
    <div className=''>
      
      <Navbar />
      <Hero />
      <Product/>
      <TopProducts />
      <Banner />
      <Subscribe />
      <Product/>
      <Testimonials />
      <Footer />
      </div>
  )
}

export default App
