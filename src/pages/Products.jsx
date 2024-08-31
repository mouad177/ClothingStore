import Header from "../components/Header"
import { EmblaCarousel } from "../components/EmblaCarousel"
import product11 from '/MyLandingPageProjects/ClothingStore/src/assets/shirt (1).png'
import product12 from '/MyLandingPageProjects/ClothingStore/src/assets/clothing-textile-new-dress-formal.png'
import { Link } from "react-router-dom"
import Resizable1 from "../components/Resizable1"
import background from '/MyLandingPageProjects/ClothingStore/src/assets/psychedelic-paper-shapes-with-copy-space.jpg'
import Resizable2 from "../components/Resizable2"


function Products() {


  return (
<>

<Header/>
<div id="MobileVesrion" className="md:hidden">
  <div id="containerMobile">
<div className="bg-black relative h-[60px]">
    
<ul className="text-white text-lg absolute p-2 flex flex-row space-x-4 justify-center items-center right-[15%] top-[12%]">
          <Link className="p-2 rounded-2xl" id="category" to='/ClothingSection'>Clothing </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/WinterClothingSection'>Winter Clothing </Link>
          <Link className="p-2  rounded-2xl" id="category" to='/CapsSection'>Caps </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/ShoesSection'>Shoes </Link>
    
        </ul>
  
</div>
<div className="bg-gradient-to-r block md:hidden from-sky-600">
<EmblaCarousel/>


</div>
<div id="Products-MobileScreen"  >
  <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 h-[400px] relative"> 
    <img className="absolute right-[50px] " src={product11}/>
  <Link to='/product11' className="top-[70%] z-40 left-[8%] bg-sky-400 duration-500 hover:bg-sky-700 p-2 rounded-xl absolute text-3xl  text-white font-extrabold">View the product</Link>
  </div>
  <div className="bg-gradient-to-r from-green-300  via-green-300 to-green-500 h-[400px] relative">
  <img className="absolute" src={product12}/>
  <Link to='/product12' className=" bg-purple-400 z-40 duration-500 hover:bg-purple-600 p-2 rounded-xl absolute top-[70%] left-[8%] text-3xl  text-white font-extrabold">View the product</Link>
  </div>

</div>
<div className=" h-[400px]">
<Resizable2/>
  </div>
</div>
</div>

<div id="PcVersion">
  <div id="container" className="mt-20 PC hidden md:block " >
    <div id="dashboard"  className=' hidden md:block flex-col items-center justify-center relative'>
  
  
          <h2 className="text-gray-700  top-[7%] absolute p-2 m-2 font-extrabold shadow-md bg-gradient-to-r from-yellow-400 from-10% via-yellow-300 via-30% to-yellow-400 to-90%  text-2xl rounded-xl text-center  justify-center items-center">Browse Categories</h2>
      
        <ul className="text-white absolute p-2  top-[26%] left-[5%] font-bold  flex flex-col items-center space-y-6 text-xl">
          <Link className="p-2 rounded-2xl" id="category" to='/ClothingSection'>Clothing </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/WinterClothingSection'>Winter Clothing </Link>
          <Link className="p-2  rounded-2xl" id="category" to='/CapsSection'>Caps </Link>
          <Link className="p-2 rounded-2xl" id="category" to='/ShoesSection'>Shoes </Link>
    
        </ul>
  
    </div>
  
  
      <div id="heroPr" className="bg-gradient-to-r hidden md:block from-sky-600  z-40">
      <EmblaCarousel/>
    
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

export default Products