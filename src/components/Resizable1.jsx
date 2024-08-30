import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product4 from '/MyLandingPageProjects/ClothingStore/src/assets/126822927_Stylish blue plaid shirt for men -9-Photoroom.png'
import product5 from '/MyLandingPageProjects/ClothingStore/src/assets/126822504_Stylish blue plaid shirt for men -7-Photoroom.png'
import product6 from '/MyLandingPageProjects/ClothingStore/src/assets/143790785_6e39a1a2-e0e6-4016-ac70-e73f8419e901-Photoroom.png'
import product7 from '/MyLandingPageProjects/ClothingStore/src/assets/115693113_Two shirts are on a checkered surface -7-Photoroom.png'
import product8 from '/MyLandingPageProjects/ClothingStore/src/assets/143790649_1009c238-9e93-4795-b397-fef3e327adc0-Photoroom.png'
import product9 from '/MyLandingPageProjects/ClothingStore/src/assets/black_cap_isolated_on_background-Photoroom.png'
import product10 from '/MyLandingPageProjects/ClothingStore/src/assets/115692830_Two shirts are on a checkered surface -4-Photoroom.png'
import { Link } from "react-router-dom";


function Resizable2() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container mx-auto">

      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings} className="hidden md:block" >
        <div id="pr">
<Link  to='/product4'>
  <img  src={product4} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product5'>
  <img  src={product5} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button to='/product4' className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product6'>
  <img  src={product6} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">30$</p>

</div>
</Link>
    </div>

    <div id="pr">
<Link  to='/product7'>
  <img  src={product7} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button to='/product4' className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product8'>
  <img  src={product8} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button to='/product4' className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">30$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product9'>
  <img  src={product9} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button to='/product4' className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">15$</p>

</div>
</Link>
    </div>
    <div id="pr">
<Link  to='/product10'>
  <img  src={product10} />
<div className="flex items-center  flex-col  space-y-3">
  
    <button to='/product4' className="bg-green-500  p-1 font-extrabold hover:bg-green-700 rounded-2xl text-white absolute top-[77%] ">
    Buy Now
    </button>
    <p className="text-white text-center">30$</p>

</div>
</Link>
    </div>
        </Slider>
      </div>
    </div>
  );
}

export default Resizable2;
