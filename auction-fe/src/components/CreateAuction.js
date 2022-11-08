import React, { useState } from "react"
import { ethers } from "ethers"
import createAuctionFactoryJson from "../constant/AuctionFactory.json"
const ALCHEMY_API_KEY_MUMBAI = process.env.ALCHEMY_API_KEY_MUMBAI

function CreateAuction() {
  const [contractParams, setContractParams] = useState({
    nft_address: "",
    nft_id: "",
    starting_bid: "",
    seller_address: "",
    auction_token: "",
  })
  const [ownerFeePool, setOwnerFeePool] = useState("")

  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    "7psAKFAlBLpGe47Y6cVcpOdTBj6TG2Gq"
  )

  const auctionFactoryContract = new ethers.Contract(
    "0xF5d54B73285f6534B38E76527B3c7aF2e75C986e",
    createAuctionFactoryJson.abi,
    provider
  )

  async function ownerFee() {
    const fee = await auctionFactoryContract.ownerFeePool()
    const formatFee = ethers.utils.formatEther(fee.toString())
    console.log(formatFee)
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
  }

  const createAuction = async () => {
    const createAuctionTx = await auctionFactoryContract.createAuction(
      contractParams.nft_address,
      contractParams.nft_id,
      contractParams.starting_bid,
      contractParams.seller_address,
      contractParams.auction_token
    )
    await createAuctionTx.wait(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Form</h3>
        </div>
        <div>
          <input
            type='text'
            onChange={onChange}
            name='nft_address'
            placeholder='Nft Address'
            value={contractParams.nft_address}
          />
        </div>
        <div>
          <input
            type='number'
            onChange={onChange}
            name='nft_id'
            placeholder='Nft Id'
            value={contractParams.nft_id}
          />
        </div>
        <div>
          <input
            type='number'
            onChange={onChange}
            name='starting_bid'
            placeholder='Starting Bid'
            value={contractParams.starting_bid}
          />
        </div>
        <div>
          <input
            type='text'
            onChange={onChange}
            name='seller_address'
            placeholder='Seller address'
            value={contractParams.seller_address}
          />
        </div>
        <div>
          <input
            type='text'
            onChange={onChange}
            name='auction_token'
            placeholder='Auction Token'
            value={contractParams.auction_token}
          />
        </div>
        <div>
          <button type='submit'>Submit Contact</button>
        </div>
      </form>
      <button onClick={createAuction}>Create Auction</button>
    </div>
  )
}

export default CreateAuction
