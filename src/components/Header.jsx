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
  <nav className='z-50 rounded-xl container mx-auto bg-gradient-to-r from-blue-700 w-full fixed top-0'>
  <div className="flex justify-around space-x-5 items-center">
<Link to='/Home'>
      <div id="logo" className='flex items-center space-x-4 p-2'>
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

  </nav>  


    <ul id='mobile-menu' className='mt-10 z-50 flex flex-col space-y-3 text-center hidden bg-blue-600 rounded-2xl p-2 shadow-md text-white'>
      <Link className='hover:text-yellow-100 hover:underline' to='/Home'>Home</Link>
          <Link className='hover:text-yellow-100 hover:underline' to='/Products'>Products</Link>
          <Link className='hover:text-yellow-100 hover:underline' to='/AboutUs'>About Us</Link>
          <Link className='hover:text-yellow-100 hover:underline' to='/Contact'>Contact</Link>
    
      </ul>

    </>

)
}

export default Header