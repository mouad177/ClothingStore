import React from 'react'
import TShirt from '/MyLandingPageProjects/ClothingStore/src/assets/t-shirt.json'
import Lottie from 'lottie-react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
<>
<Header/>
<div id='PcVersion' className='hidden md:block'>
  <div className='container  h-[100%]  w-[90%] mx-auto bg-slate-300 rounded-2xl shadow-md mt-20'>
  
  <div className="flex items-center w-[100%] md:flex-row-reverse flex-col  ">
  <Lottie animationData={TShirt} loop={false} style={{width:1700}} />
  <div className='flex flex-col items-center space-y-10'>
    <h2 id='about-us' className='text-5xl font-extrabold'>About Us</h2>
  
    <p className='w-[55%] text-xl'>
  At Elegance Center , we bring you fashion you love with top quality and designs for every taste. Explore our diverse collection and trust that we're here to make your experience special. Thank you for visiting!
  
  
  
  
  
  </p>
  <Link to='/Products' className='bg-green-400 rounded-2xl p-2 text-white font-bold duration-300 hover:text-green-500 hover:bg-white'>Learn More</Link>
  </div> 
  
  </div>
  
  
  </div>
  
</div>
<div id="MobileVersion" className='md:hidden'>
  <div className="container h-[100%] w-[90%] mt-20 rounded-2xl mx-auto bg-slate-300 relative">
<div className="flex flex-col items-center ">
<Lottie animationData={TShirt} loop={false} style={{width:300}} />
<div className='flex flex-col text-center items-center space-y-6'>
  <h2 id='about-us' className='text-3xl font-extrabold'>About Us</h2>
    
    <p className='w-[55%] text-lg'>
  At Elegance Center , we bring you fashion you love with top quality and designs for every taste. Explore our diverse collection and trust that we're here to make your experience special. Thank you for visiting!
  
  </p>
</div>
</div>
  </div>
</div>
</>
  )
}

export default AboutUs