import { ethers } from "ethers"
import { parseEther } from "ethers/lib/utils"
import React, { useEffect, useState } from "react"
import createAuctionFactoryJson from "../constant/AuctionFactory.json"
import Navbar from "./Navbar"

function Allowed() {
  const [ownerFeePool, setOwnerFeePool] = useState("")
  const [address, setAddress] = useState("")

  // we need to show feePool

  useEffect(() => {
    const provider = new ethers.providers.InfuraProvider("maticmum")
    const auctionFactoryContract = new ethers.Contract(
      "0xF5d54B73285f6534B38E76527B3c7aF2e75C986e",
      createAuctionFactoryJson.abi,
      provider
    )
    async function ownerFee() {
      const fee = await auctionFactoryContract.ownerFeePool()
      const formatFee = ethers.utils.formatEther(fee.toString())
      setOwnerFeePool(formatFee)
      console.log(formatFee)
    }
    ownerFee()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onChange = (event) => {
    console.log(event.target.value)
    let a = event.target.value
    setAddress(a)
  }

  const withdrawFee = async (address) => {
    const provider = new ethers.providers.InfuraProvider("maticmum")
    const auctionFactoryContract = new ethers.Contract(
      "0xF5d54B73285f6534B38E76527B3c7aF2e75C986e",
      createAuctionFactoryJson.abi,
      provider
    )
    const metamaskWalletProvider = new ethers.providers.Web3Provider(
      window.ethereum
    )
    const signer = metamaskWalletProvider.getSigner()
    console.log("This shouldbe the address\n", address)
    const connectedContract = await auctionFactoryContract.connect(signer)
    const withdraw = await connectedContract.ownerFeeWithdraw(
      address,
      ethers.utils.parseEther(ownerFeePool)
    )
  }

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] border border-gray-200  p-5 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center border-slate-100 rounded-md p-5 bg-slate-100">
            <h1 className="font-semibold text-xl">{ownerFeePool}</h1>
          </div>
          
          <form onSubmit={handleSubmit}>
            <h3 className='font-bold text-2xl text-center'>Admin Area</h3>
            <div className='mb-8 mt-4'>
              <input
                type='text'
                onChange={onChange}
                name='address'
                placeholder='Address'
                value={address}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mt-2'>
              <button
                type='submit'
                className='hover:shadow-form w-full rounded-md bg-[#06986c] py-3 px-8 text-center text-base font-semibold text-white outline-none'
              >
                Submit Address
              </button>
            </div>
            <div className='mt-2'>
              <button
                onClick={() => withdrawFee(address)}
                className='hover:shadow-form w-full rounded-md bg-[#06986c] py-3 px-8 text-center text-base font-semibold text-white outline-none'
              >
                Withdraw
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Allowed
