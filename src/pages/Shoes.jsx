import Header from "../components/Header"
import { EmblaCarousel } from "../components/EmblaCarousel"
import product11 from '/MyLandingPageProjects/ClothingStore/src/assets/shirt (1).png'
import product12 from '/MyLandingPageProjects/ClothingStore/src/assets/clothing-textile-new-dress-formal.png'
import { Link } from "react-router-dom"
import Resizable1 from "../components/Resizable1"
import Resizable2 from "../components/Resizable2"
import product4 from '/MyLandingPageProjects/ClothingStore/src/assets/126822927_Stylish blue plaid shirt for men -9-Photoroom.png'
import product5 from '/MyLandingPageProjects/ClothingStore/src/assets/126822504_Stylish blue plaid shirt for men -7-Photoroom.png'
import product6 from '/MyLandingPageProjects/ClothingStore/src/assets/143790785_6e39a1a2-e0e6-4016-ac70-e73f8419e901-Photoroom.png'
import product7 from '/MyLandingPageProjects/ClothingStore/src/assets/115693113_Two shirts are on a checkered surface -7-Photoroom.png'
import product8 from '/MyLandingPageProjects/ClothingStore/src/assets/143790649_1009c238-9e93-4795-b397-fef3e327adc0-Photoroom.png'
import product9 from '/MyLandingPageProjects/ClothingStore/src/assets/black_cap_isolated_on_background-Photoroom.png'
import product10 from '/MyLandingPageProjects/ClothingStore/src/assets/115692830_Two shirts are on a checkered surface -4-Photoroom.png'
import product1 from '/MyLandingPageProjects/ClothingStore/src/assets/nobody-cotton-top-fashion-textile.png'
import product2 from '/MyLandingPageProjects/ClothingStore/src/assets/close-up-flannel-shirt-detail.png'
import product3 from '/MyLandingPageProjects/ClothingStore/src/assets/Fm5T0PpDQpwLcltraKnVk-transformed.png'
import product13 from '/MyLandingPageProjects/ClothingStore/src/assets/fashion-polo-shirt-men.png'
import product14 from '/MyLandingPageProjects/ClothingStore/src/assets/stack-men-shirt.png'
import product15 from '/MyLandingPageProjects/ClothingStore/src/assets/shirt (2).png'
import product16 from '/MyLandingPageProjects/ClothingStore/src/assets/WinterClothing/orange1.png'
import product17 from '/MyLandingPageProjects/ClothingStore/src/assets/WinterClothing/pngegg (1).png'
import product18 from '/MyLandingPageProjects/ClothingStore/src/assets/WinterClothing/pngegg (2).png'
import product19 from '/MyLandingPageProjects/ClothingStore/src/assets/WinterClothing/pngegg (3).png'
import product20 from '/MyLandingPageProjects/ClothingStore/src/assets/WinterClothing/pngegg (4).png'
import product22 from '/MyLandingPageProjects/ClothingStore/src/assets/WinterClothing/pngegg (6).png'

import product29 from '/MyLandingPageProjects/ClothingStore/src/assets/Shoes/143790778_6d1a8184-41bf-494d-ad5d-d1028b0c2209-Photoroom.png'
import product30 from '/MyLandingPageProjects/ClothingStore/src/assets/Shoes/143790928_cacf0b99-ff4a-473b-b232-856718b970c7-Photoroom.png'
import product31 from '/MyLandingPageProjects/ClothingStore/src/assets/Shoes/brown-leather-shoes-Photoroom.png'
import product32 from '/MyLandingPageProjects/ClothingStore/src/assets/Shoes/fashion-shoes-sneakers-Photoroom.png'
import product33 from '/MyLandingPageProjects/ClothingStore/src/assets/Shoes/men-shoes-Photoroom.png'



function Shoes() {


  return (
<>
<Header/>
<div id="MobileVersion" className="md:hidden">
<div id="containerMobile">
<div className="bg-black relative h-[60px]">
    
<ul className="text-white text-lg absolute p-2 flex flex-row space-x-4 justify-center items-center right-[15%] top-[12%]">
          <Link className="p-2 rounded-2xl" id="category" to='/ClothingSection'>Clothing </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/WinterClothingSection'>Winter Clothing </Link>
          <Link className="p-2  rounded-2xl" id="category" to='/CapsSection'>Caps </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/ShoesSection'>Shoes </Link>
    
        </ul>
  
</div>
<div id="ClothingMobile" className="relative bg-gradient-to-r md:hidden from-sky-600">
<div id="pr">
<Link  to='/product29' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
  <img width={200} src={product29} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product30' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
  <img width={200} src={product30} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product31' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
  <img width={200} src={product31} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product32' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product32} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product33' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product33} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product6' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product6} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product8' className="md:hidden flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product8} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>

</div>
<div id="Products-MobileScreen"  >
  <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 h-[400px] relative"> 
  <Link to='/product11' className="top-[70%] left-[8%] bg-sky-400 duration-500 hover:bg-sky-700 p-2 rounded-xl absolute text-3xl  text-white font-extrabold">View the product</Link>
  <img className="absolute right-[50px] " src={product11}/>

  
  
  
  </div>
  <div className="bg-gradient-to-r from-green-300 via-green-300 to-green-500 h-[400px] relative">
  <img className="absolute" src={product12}/>
  <Link to='/product12'  className=" bg-purple-400 duration-500 hover:bg-purple-600 p-2 rounded-xl absolute top-[70%] left-[8%] text-3xl  text-white font-extrabold">View the product
  </Link>
  </div>


</div>
<div className=" h-[400px]">
<Resizable2/>
  </div>
</div>


</div>


<div id="PcVersion">
  <div id="container" className="mt-16 PC hidden md:block " >
    <div id="dashboard"  className=' hidden md:block flex-col items-center justify-center relative'>
  
  
          <h2 className="text-gray-700  top-[7%] absolute p-2 m-2 font-extrabold shadow-md bg-gradient-to-r from-yellow-400 from-10% via-yellow-300 via-30% to-yellow-400 to-90%  text-2xl rounded-xl text-center  justify-center items-center">Browse Categories</h2>
      
        <ul className="text-white absolute p-2  top-[26%] left-[5%] font-bold  flex flex-col items-center space-y-6 text-xl">
          <Link className="p-2 rounded-2xl" id="category" to='/ClothingSection'>Clothing </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/WinterClothingSection'>Winter Clothing </Link>
          <Link className="p-2  rounded-2xl" id="category" to='/CapsSection'>Caps </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/ShoesSection'>Shoes </Link>
    
        </ul>
  
    </div>
  
<div id="ClothingPC" className=" relative bg-gradient-to-r hidden md:from-sky-600">
<div id="pr" >
<Link  to='/product29' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
  <img width={200} src={product29} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product30' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
  <img width={200} src={product30} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product31' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
  <img width={200} src={product31} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product32' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product32} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product33' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product33} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product6' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product6} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product8' className="hidden md:flex flex-col items-center bg-gray-800 rounded-2xl m-2">
<img width={200} src={product8} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white  ">
    Buy Now
    </button>
    <p className="text-white ">30$</p>

</div>
</Link>
    </div>



</div>
  
    <div id='products' className="hidden md:block">
  
        <div id="pr11" className="bg-gradient-to-r hidden md:block from-yellow-200 via-yellow-300 to-yellow-500 md:relative">
    <img className="absolute right-4" src={product11}/>
    <Link to='/product11' className="top-[70%] left-[8%] bg-sky-400 duration-500 hover:bg-sky-700 p-2 rounded-xl absolute text-xl  text-white font-extrabold">View the product</Link>
        </div>
    
        <div id="pr12" className=" bg-gradient-to-r hidden md:block from-green-300 via-green-300 to-green-500 md:relative">
        <img className="absolute" src={product12}/>
        <Link to='/product12' className=" bg-purple-400 duration-500 hover:bg-purple-600 p-2 rounded-xl absolute top-[70%] left-[8%] text-xl  text-white font-extrabold">View the product</Link>
        </div>
    
      
    
    
    </div>
    
  
  
  
  </div>
  
  
  
  <div  id="footer" className=" h-fit absolute mt-0">
  <Resizable1/>
  </div>
  
</div>


</>

  )
}

export default Shoes