import React from 'react'
import MetamaskButton from './MetamaskButton'

export default function Navbar() {
  return (
    <div>
    
    <div className="flex flex-wrap ">
      <section className="relative mx-auto">
          
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-3 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
               
              NFT Auction 
            </a>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a className="hover:text-gray-200" href="#">Home</a></li>
              <li><a className="hover:text-gray-200" href="#">Admin</a></li>
              {/* <li><a className="hover:text-gray-200" href="#">Collections</a></li>
              <li><a className="hover:text-gray-200" href="#">Contact Us</a></li> */}
            </ul>
            
            <div className="hidden xl:flex items-center space-x-5 items-center">
            <MetamaskButton />  
            </div>
          </div>   
        </nav>    
      </section>
    </div>
    
    <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
            <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
            </a>
        </div>
    </div></div>
  )
}