import React from 'react'

import Trees from '../images/trees.png';
import Dining from '../images/dining.png';
import Windows from '../images/windows.png'
import Cabin from '../images/cabin.png'
import Hall from '../images/hall.png'

function Cards() {
  return (
    <>
    <section>
        <div className="container flex flex-col lg:px-36 lg:mx-auto lg:flex-row lg:mt-10 lg:mb-0">
          {/* IMAGE */}
          <div className="flex lg:w-5/6 lg:items-center">
            <img src={Trees} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full md:h-full" />
          </div>
            <div className="flex flex-col items-center p-20 md:w-1/3 bg-liquid-darkblue">
                <h3 className="mb-5 font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">ALPS &amp; AVE</h3>
                <h3 className="font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">melbourne, vic 3046</h3>
                <span className="inline-block h-0.5 w-10 bg-liquid-mac-cheese mt-8 mb-6"></span>
                <p className="mt-6 text-center text-liquid-mac-cheese">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>

            </div>
        </div>  
      </section>
    <section>
        <div className="container flex flex-col lg:px-36 lg:mx-auto lg:flex-row-reverse lg:mt-0 lg:mb-0">
          {/* IMAGE */}
          <div className="flex lg:w-5/6 lg:items-center">
            <img src={Dining} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full md:h-full" />
          </div>
            <div className="flex flex-col items-center p-20 md:w-1/3 bg-liquid-darkblue">
                <h3 className="mb-5 font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">ALPS &amp; AVE</h3>
                <h3 className="font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">melbourne, vic 3046</h3>
                <span className="inline-block h-0.5 w-10 bg-liquid-mac-cheese mt-8 mb-6"></span>
                <p className="mt-6 text-center text-liquid-mac-cheese">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>

            </div>
        </div>  
      </section> 
      <section>
        <div className="container flex flex-col lg:px-36 lg:mx-auto lg:flex-row lg:mt-0 lg:mb-0">
          {/* IMAGE */}
          <div className="flex lg:w-5/6 lg:items-center">
            <img src={Windows} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full md:h-full" />
          </div>
            <div className="flex flex-col items-center p-20 md:w-1/3 bg-liquid-darkblue">
                <h3 className="mb-5 font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">ALPS &amp; AVE</h3>
                <h3 className="font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">melbourne, vic 3046</h3>
                <span className="inline-block h-0.5 w-10 bg-liquid-mac-cheese mt-8 mb-6"></span>
                <p className="mt-6 text-center text-liquid-mac-cheese">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>

            </div>
        </div>  
      </section>
    <section>
        <div className="container flex flex-col lg:px-36 lg:mx-auto lg:flex-row-reverse lg:mt-0 lg:mb-0">
          {/* IMAGE */}
          <div className="flex lg:w-5/6 lg:items-center">
            <img src={Hall} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full md:h-full" />
          </div>
            <div className="flex flex-col items-center p-20 md:w-1/3 bg-liquid-darkblue">
                <h3 className="mb-5 font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">ALPS &amp; AVE</h3>
                <h3 className="font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">melbourne, vic 3046</h3>
                <span className="inline-block h-0.5 w-10 bg-liquid-mac-cheese mt-8 mb-6"></span>
                <p className="mt-6 text-center text-liquid-mac-cheese">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>

            </div>
        </div>  
      </section> 
      <section>
        <div className="container flex flex-col lg:px-36 lg:mx-auto lg:flex-row lg:mt-0 lg:mb-0">
          {/* IMAGE */}
          <div className="flex lg:w-5/6 lg:items-center">
            <img src={Cabin} className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full md:h-full" />
          </div>
            <div className="flex flex-col items-center p-20 md:w-1/3 bg-liquid-darkblue">
                <h3 className="mb-5 font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">ALPS &amp; AVE</h3>
                <h3 className="font-semibold tracking-widest uppercase text-1xl text-liquid-mac-cheese">melbourne, vic 3046</h3>
                <span className="inline-block h-0.5 w-10 bg-liquid-mac-cheese mt-8 mb-6"></span>
                <p className="mt-6 text-center text-liquid-mac-cheese">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>

            </div>
        </div>  
      </section>
      
    <div className="flex justify-center mt-10 mb-32">
      <button className="items-center w-48 h-12 font-bold tracking-wide transition duration-200 border text-liquid-darkblue border-liquid-brown-grey focus:shadow-outline focus:outline-none">LOAD MORE</button>
    </div>
    
    </>   
  )
}

export default Cards
