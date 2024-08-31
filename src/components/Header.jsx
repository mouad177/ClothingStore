import logo from '/MyLandingPageProjects/ClothingStore/src/assets/tshirt.png'
import menu from '/MyLandingPageProjects/ClothingStore/src/assets/menu (1).png'
import close from '/MyLandingPageProjects/ClothingStore/src/assets/close (3).png'
import cart from '/MyLandingPageProjects/ClothingStore/src/assets/shopping-cart (1).png'
import background from '/MyLandingPageProjects/ClothingStore/src/assets/shopping-cart (1).png'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function Header() {
  useEffect(()=>{
    let menuBtn = document.getElementById('menuBtn');
    let closeBtn = document.getElementById('closeBtn');
    let mobileMenu = document.getElementById('mobile-menu');

menuBtn.onclick = function(){
  mobileMenu.classList.toggle('hidden');
  menuBtn.classList.add('hide');
  closeBtn.classList.remove('hide');
};
closeBtn.onclick = function(){
  mobileMenu.classList.toggle('hidden');
  menuBtn.classList.remove('hide');
  closeBtn.classList.add('hide');

}

  },[])
  return (
<>
  <nav className='container bg-gradient-to-r from-indigo-500  fixed top-0 rounded-2xl'>
  <div className="flex flex-row items-center justify-around">
<Link to='/Home'>
      <div id="logo" className='ml-0 text-2xl flex flex-row items-center space-x-4'>
        <img src={logo} width={50} alt="tshirt" />
        <h2 className='font-extrabold text-2xl text-yellow-500'>Elegance Center</h2>
      </div>
</Link>
    <ul className='space-x-9 text-lg hidden md:flex text-white'>
      <Link className='hover:text-yellow-100 hover:underline' to='/Home'>Home</Link>
      <Link className='hover:text-yellow-100 hover:underline' to='/Products'>Products</Link>
      <Link className='hover:text-yellow-100 hover:underline' to='/AboutUs'>About Us</Link>
      <Link className='hover:text-yellow-100 hover:underline' to='/Contact'>Contact</Link>
  
    </ul>
    <img className='hidden md:flex' src={cart} width={50} alt="" />

    <div id="icons-mobile" className="md:hidden flex -translate-x-4 space-x-3">
    <img src={cart} width={50} alt="" />
    <img id='menuBtn' src={menu} width={50} alt="menu" />
    <img id='closeBtn' className='hide' src={close} width={50} alt="close" />
  
    </div>
  </div>
<div id="mobile-menu" className=" sm:hidden z-50">
  
<ul className='flex flex-col mt-4 sm:hidden  bg-blue-500 p-2 rounded-2xl text-white shadow-md my-2 items-center right-6 left-6 absolute leading-relaxed space-y-3 font-bold md:hidden'>
      <Link className='hover:text-yellow-100 hover:underline' to='/Home'>Home</Link>
          <Link className='hover:text-yellow-100 hover:underline' to='/Products'>Products</Link>
          <Link className='hover:text-yellow-100 hover:underline' to='/AboutUs'>About Us</Link>
          <Link className='hover:text-yellow-100 hover:underline' to='/Contact'>Contact</Link>
    
      </ul>
</div>
  </nav>  




    </>

)
}

export default Header