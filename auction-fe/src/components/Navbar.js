import React from 'react'
import MetamaskButton from './MetamaskButton'

export default function Navbar() {
  return (
    <div>
    
    <div class="flex flex-wrap ">
      <section class="relative mx-auto">
          
        <nav class="flex justify-between bg-gray-900 text-white w-screen">
          <div class="px-5 xl:px-12 py-3 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="#">
               
              NFT Auction 
            </a>
            
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a class="hover:text-gray-200" href="#">Home</a></li>
              <li><a class="hover:text-gray-200" href="#">Admin</a></li>
              {/* <li><a class="hover:text-gray-200" href="#">Collections</a></li>
              <li><a class="hover:text-gray-200" href="#">Contact Us</a></li> */}
            </ul>
            
            <div class="hidden xl:flex items-center space-x-5 items-center">
              
              
            <MetamaskButton />
              
            </div>
          </div>
          
              
        </nav>
        
      </section>
    </div>
    
    <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
            <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <img class="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
            </a>
        </div>
    </div></div>
  )
}
