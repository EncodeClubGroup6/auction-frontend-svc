import React, { useEffect, useState } from 'react'
import { ethers } from "ethers"

// starting an auction for (time interval in seconds)
// 

const time = "2:54:43"

const onChange = function(){

}


function ManageAuction() {
  
  const [nftBidData, setNftBidData] = useState({
    nft_address: "",
    nft_id: "",
    higher_bidder: "",
    high_bid: "",
  })
  console.log(nftBidData.nft_address);

  return <div className="mt-5 mx-auto">

    <div classNameName="flex items-center justify-center bg-indigo-50 px-4">
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md ">
        <img src="https://media.istockphoto.com/id/1291476539/photo/sunlight-in-thick-forest.jpg?b=1&s=170667a&w=0&k=20&c=v5y1ms1W_Y3LekR82r_XyuL17549eQWRXmRv0v1UjiY=" alt="plant" className="h-auto w-full" />
        <div className="p-5">
          <p className="text-xl mb-5 text-gray-700">Time to until the end of the auction {time}</p>
        </div>
        <div className="p-2">
          <p className="text-sm mb-5 item-center text-gray-700">Place a bid to purchase this NFT</p>
          <div className='mb-8 mt-4'>
            <input
              type='number'
              onChange={onChange}
              name='bidplaced'
              placeholder='Place the amount you want to bid'
              value=""
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Place Bid</button>
        </div>
        <div className="p-5 ">
        <div className="p-2 bg-gray-200 rounded-xl">
        <p className="text-medium mb-5 text-gray-700">Certification Number</p>
          <h1>VERB287821727182182812</h1>
          <h2>{nftBidData.nft_address}</h2>
          <h2>{nftBidData.nft_id}</h2>
          </div>
          
        </div>
      </div>
    </div>
  </div>
}

export default ManageAuction
