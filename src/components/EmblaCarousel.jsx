import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import product1 from '/MyLandingPageProjects/ClothingStore/src/assets/nobody-cotton-top-fashion-textile.png'
import product2 from '/MyLandingPageProjects/ClothingStore/src/assets/close-up-flannel-shirt-detail.png'
import product3 from '/MyLandingPageProjects/ClothingStore/src/assets/Fm5T0PpDQpwLcltraKnVk-transformed.png'
import { Link } from 'react-router-dom'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
  <>


    <div className="embla" ref={emblaRef}>
      {/*TailwindFlex */}

    <div className="embla__container top-0">

    <div id='PrHero' className="embla__slide flex flex-col items-center justify-center p-2 -translate-y-28 ">

<img src={product1} />
<p className='font-extrabold text-4xl text-cyan-300 text-center'>cotton top fashion textile</p>
<Link id='buy' to='/product1' className='p-2 absolute top-[50%] right-[27%] rounded-2xl text-white font-extrabold text-2xl text-center self-center '>Buy Now</Link>
</div>



        <div className="embla__slide flex flex-col items-center justify-center p-2 -translate-y-20">

<img src={product2} />
<p className='font-extrabold text-4xl text-white text-center'> flannel shirt</p>
<Link id='buy' to='/product2' className='p-2 absolute top-[50%] right-[27%] rounded-2xl text-white  font-extrabold text-2xl text-center self-center '>Buy Now</Link>
</div>


        <div className="embla__slide flex flex-col items-center justify-center p-2 -translate-y-28">

          <img src={product3} />
          <p className='font-extrabold text-4xl text-yellow-400 text-cente -translate-y-16'>Two shirts </p>
          <Link id='buy' to='/product3' className='p-2 absolute top-[50%] right-[27%] rounded-2xl text-white  font-extrabold text-2xl text-center self-center'>Buy Now</Link>
        </div>

</div>

    




		</div>



      </>
  )
}
