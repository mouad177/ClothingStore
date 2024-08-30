import { Link } from 'react-router-dom'
import Header from '../components/Header'
import blue from '/MyLandingPageProjects/ClothingStore/src/assets/tshirts/blue.png'
import green from '/MyLandingPageProjects/ClothingStore/src/assets/tshirts/green.png'
import orange from '/MyLandingPageProjects/ClothingStore/src/assets/tshirts/orange.png'
import white from '/MyLandingPageProjects/ClothingStore/src/assets/tshirts/white.png'
import { useEffect } from 'react'

function Home() {
  useEffect(()=>{
let Hero = document.getElementById('hero');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let tshirt1 = document.getElementById('tshirt1');
let tshirt2 = document.getElementById('tshirt2');
let tshirt3 = document.getElementById('tshirt3');
let tshirt4 = document.getElementById('tshirt4');
let bgdesign = document.getElementById('bgdesign');
tshirt1.onclick = function(){
  Hero.src = tshirt1.src
  bgdesign.style.transition='0.6s'
  bgdesign.style.background='rgb(16, 62, 132)'
  text.style.transition='0.6s'
  text.style.color='rgb(96 165 250)'
  btn.style.transition='0.6s'
  btn.style.background='rgb(59 130 246)'
  btn.onmouseover = function(){
    btn.style.background='darkblue'

  }
  btn.onmouseleave = function(){
    btn.style.background='rgb(59 130 246)'

  }
}
tshirt2.onclick = function(){
  Hero.src = tshirt2.src
  bgdesign.style.transition='0.6s'
  bgdesign.style.background='rgb(53, 181, 53)'
  text.style.transition='0.6s'

  text.style.color='rgb(74 222 128)'
  btn.style.background='green'
  btn.onmouseover = function(){
    btn.style.background='darkgreen'

  }
  btn.onmouseleave = function(){
    btn.style.background='green'

  }
}
tshirt3.onclick = function(){
  Hero.src = tshirt3.src
  bgdesign.style.transition='0.6s'
  bgdesign.style.background='rgb(176, 129, 43)'
  text.style.transition='0.6s'
  text.style.color='orange'
  btn.style.transition='0.6s'
  btn.style.background='darkorange'
  btn.onmouseover = function(){
    btn.style.background='rgb(176, 129, 43)'

  }
  btn.onmouseleave = function(){
    btn.style.background='darkorange'

  }

}
tshirt4.onclick = function(){
  Hero.src = tshirt4.src
  bgdesign.style.transition='0.6s'
  bgdesign.style.background='rgb(147, 147, 147)'
  text.style.transition='0.6s'
  text.style.color='gray'
  btn.style.transition='0.6s'
  btn.style.background='gray'
  btn.onmouseover = function(){
    btn.style.background='darkgray'

  }
  btn.onmouseleave = function(){
    btn.style.background='gray'

  }
}

  },[])
  return (
<div>
<Header/>

      <div className='mt-20  flex flex-col space-y-24 text-center md:flex-row-reverse items-center justify-around'>


  <div id="bgdesign"></div>
  <img  className='md:w-1/3 translate-x-11 -translate-y-20' src={blue} id="hero" />
  

<div className='flex flex-col items-center translate-x-10 space-y-8 -translate-y-24'>
  <h1 className='font-bold text-8xl text-white'>Unique Elegance</h1>
  <h2 id='text' className='font-bold text-5xl text-blue-400'>Quality That Sets You Apart   </h2>
  <Link id='btn' to='/Products' className='p-3 rounded-2xl text-2xl text-white bg-blue-500 text-center self-center'>Shop Now</Link>
  <div id="tshirts" className='flex space-x-3 translate-y-5'>
  <img id='tshirt1' src={blue} width={100} />
  <img id='tshirt2' src={green} width={100} />
  <img id='tshirt3' src={orange} width={100} />
  <img id='tshirt4' src={white} width={120} />


  </div>
</div>

      </div>
  
</div>  
)
}

export default Home