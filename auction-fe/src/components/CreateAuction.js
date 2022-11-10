import React, { useEffect, useState } from "react"
import { ethers } from "ethers"
import createAuctionFactoryJson from "../constant/AuctionFactory.json"
const ALCHEMY_API_KEY_MUMBAI = process.env.ALCHEMY_API_KEY_MUMBAI

function CreateAuction(props) {
  const [contractParams, setContractParams] = useState({
    nft_address: "",
    nft_id: "",
    starting_bid: "",
    seller_address: "",
    auction_token: "",
  })
  const [ownerFeePool, setOwnerFeePool] = useState("")

  const FACTORY_FEE = 0.03

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
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const onChange = (event) => {
    setContractParams({
      ...contractParams,
      [event.target.name]: event.target.value,
    })

    console.log(contractParams)
  }

  const createAuction = async () => {
    const metamaskWalletProvider = new ethers.providers.Web3Provider(
      window.ethereum
    )
    const signer = metamaskWalletProvider.getSigner()
    const connectedContract = await auctionFactoryContract.connect(signer)

    const createAuctionTx = await connectedContract.createAuction(
      contractParams.nft_address,
      contractParams.nft_id,
      contractParams.starting_bid,
      contractParams.seller_address,
      contractParams.auction_token,
      {
        value: ethers.utils.parseEther(FACTORY_FEE.toFixed(18)),
      }
    )

    console.log("calling the create auction function..")
    await createAuctionTx.wait(1)
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] border border-gray-200  p-5 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl text-center">Form</h3>
          <div className="mb-8 mt-3">
            <input
              type='text'
              onChange={onChange}
              name='nft_address'
              placeholder='Nft Address'
              value={contractParams.nft_address}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"                 
            />
          </div>
          <div className="mb-8 mt-3">
            <input
              type='number'
              onChange={onChange}
              name='nft_id'
              placeholder='Nft Id'
              value={contractParams.nft_id}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-8 mt-3">
            <input
              type='number'
              onChange={onChange}
              name='starting_bid'
              placeholder='Starting Bid'
              value={contractParams.starting_bid}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
            />
          </div>
          <div className="mb-8 mt-3">
            <input
              type='text'
              onChange={onChange}
              name='seller_address'
              placeholder='Seller address'
              value={contractParams.seller_address}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
            />
          </div>
          <div className="mb-8 mt-3">
            <input
              type='text'
              onChange={onChange}
              name='auction_token'
              placeholder='Auction Token'
              value={contractParams.auction_token}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
            />
          </div>
          <div className="mt-2">
            <button type='submit' className="hover:shadow-form w-full rounded-md bg-[#06986c] py-3 px-8 text-center text-base font-semibold text-white outline-none">Submit Contact</button>
          </div>
          <div className="mt-2">
          <button onClick={createAuction} className="hover:shadow-form w-full rounded-md bg-[#06986c] py-3 px-8 text-center text-base font-semibold text-white outline-none">Create Auction</button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default CreateAuction
