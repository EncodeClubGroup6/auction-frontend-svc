import React, { useEffect, useState } from "react"
import { ethers } from "ethers"
import CreateAuction from "./components/CreateAuction"
import {  BrowserRouter, Routes, Route, Link } from "react-router-dom"
import MetamaskButton from "./components/MetamaskButton"
import Admin from "./components/Admin"
import Home from "./components/Home"

const Navbar = () => {
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
                <Link to='/' className="hover:text-gray-200"><li>Home</li></Link>
                <Link to='/admin' className="hover:text-gray-200" ><li>Admin</li></Link>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 items-center">
                <MetamaskButton />
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route
          path='/'
          element={<Home />}

        />
        <Route
          path='/admin'
          element={<Admin />}
        />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
