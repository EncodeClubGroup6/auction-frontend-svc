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
                                <li><a className="hover:text-gray-200" href="/admin">Admin</a></li>
                                <li><a className="hover:text-gray-200" href="/auctions">Auction</a></li>
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
        </div>
    )
}