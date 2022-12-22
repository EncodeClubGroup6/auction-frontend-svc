import { render } from "@testing-library/react"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import createAuctionFactoryJson from "../constant/AuctionFactory.json"
import EnglishAuctionJson from "../constant/EnglishAuction.json"

// ToDo: useEffect for fetching auction should be run once--> Hoooooooooooooooow cannnnnnnn damnnnnnnn
// ToDo: verify the auction object, if is what we expect, let's render it guys :)

function Auctions() {
  const [deployedAuctions, setDeployedAuctions] = useState([])
  const [auctionObject, setAuctionObject] = useState({
    nft_address: "",
    nft_id: "",
    seller: "",
    end_at: "",
    started: "",
    ended: "",
    higher_bidder: "",
    high_bid: "",
  })

  useEffect(() => {
    const fetchAuctions = async () => {
      const provider = new ethers.providers.AlchemyProvider(
        "maticmum",
        "dAiRC9CfdYxwMaP4ivSAbMVmDYKDBtmX"
      )
      const auctionFactoryContract = new ethers.Contract(
        "0xF5d54B73285f6534B38E76527B3c7aF2e75C986e",
        createAuctionFactoryJson.abi,
        provider
      )
      let auctions
      let auctionsArray = []
      for (let i = 0; i < 3; i++) {
        auctions = await auctionFactoryContract.deployedAuctions(i)
        auctionsArray.push(auctions)
      }
      console.log(`auctionsArray ${auctionsArray}`)
      setDeployedAuctions(auctionsArray)
    }

    fetchAuctions()
  }, [])

  useEffect(() => {
    const renderAuctions = deployedAuctions.map(async (auctionAddress) => {
      const provider = new ethers.providers.AlchemyProvider(
        "maticmum",
        "dAiRC9CfdYxwMaP4ivSAbMVmDYKDBtmX"
      )
      const englishContractFactory = new ethers.Contract(
        auctionAddress,
        EnglishAuctionJson.abi,
        provider
      )
      let nft = await englishContractFactory.nft()
      let nftId = await englishContractFactory.nftId()
      let seller = await englishContractFactory.seller()
      let endAt = await englishContractFactory.endAt()
      let started = await englishContractFactory.started()
      let ended = await englishContractFactory.ended()
      let highestBidder = await englishContractFactory.highestBidder()
      let highestBid = await englishContractFactory.highestBid()
      setAuctionObject((auctionObject) => ({
        ...auctionObject,
        nft_address: nft,
        nft_id: nftId,
        seller: seller,
        end_at: endAt,
        started: started,
        ended: ended,
        higher_bidder: highestBidder,
        high_bid: highestBid,
      }))
    })
  }, [])

  const render = Object.entries(auctionObject).map((el, i) => {
    return (
      <div className='w-full bg-gray-100'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-4'>
          <div
            className='max-w-6xl mb-5 break-all bg-white border border-gray-200 rounded-lg shadow-md'
            md='auto'
            key={i}
          >
            {/* <img
              class='rounded-t-lg'
              src='https://flowbite.com/docs/images/blog/image-4.jpg'
              alt=''
            ></img> */}
            <div className='flex flex-col items-center justify-center w-full p-3 bg-gray-300 rounded-lg shadow-lg'>
              <div className='mb-8'>
                <div className='text-center'>
                  <p className='mb-2 text-xl font-bold text-gray-700'>
                    nft address: {Object.values(auctionObject)[0]}
                  </p>
                  <p className='mb-2 text-xl font-bold text-gray-700'>
                    seller: {Object.values(auctionObject)[2]}
                  </p>
                  <p className='mb-2 text-xl font-bold text-gray-700'>
                    ended at: {Object.values(auctionObject)[3]}
                  </p>
                  {/* <p className='mb-2 text-xl font-bold text-gray-700'>started: {Object.values(auctionObject)[4]}</p>
                  <p className='mb-2 text-xl font-bold text-gray-700'>ended: {Object.values(auctionObject)[5]}</p> */}
                  {/* <p>{Object.entries(auctionObject)[10]}</p> */}
                  {/* <h1>{Object.values(auctionObject)[7]}</h1>  */}
                  {/* 
            <h1>{Object.values(auctionObject)[2]}
            </h1>
            */}
                  {/* <h3 postId={post.id} />
              <h3 postId={post.id} /> */}
                  <div>
                    <button className="p-3 m-3 text-white bg-green-600 rounded">
                      Place Bid
                    </button>
                    <button className="p-3 m-3 text-white bg-green-600 rounded">
                      Buy It Now
                    </button>
                    <button className="px-3 py-1 m-2 text-white bg-gray-900 rounded">
                      Watch this item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      {render}
      {Object.entries(auctionObject).map((index) => (
        <div className='w-full px-4 mx-auto mt-24 mb-12 xl:w-8/12 xl:mb-0'>
          <div class='block w-full overflow-x-auto'>
            <table class='items-center bg-transparent w-full border-collapse '>
              <thead>
                <tr>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    End At
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    NFT Id
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    Highest Bidder
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    Seller
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    Ended
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    Started
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    NFT Address
                  </th>
                  <th class='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                    High Bid
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 '
                    key={index}
                  >
                    {Object.values(auctionObject.end_at)}
                  </th>
                  <td
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 '
                    key={index}
                  >
                    {Object.values(auctionObject.nft_id)}
                  </td>
                  <td
                    class='border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
                    key={index}
                  >
                    {Object.values(auctionObject.higher_bidder)}
                  </td>
                  <td
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
                    key={index}
                  >
                    <i class='fas fa-arrow-up text-emerald-500 mr-4'></i>
                    {Object.values(auctionObject.seller)}
                  </td>
                  <td
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
                    key={index}
                  >
                    <i class='fas fa-arrow-up text-emerald-500 mr-4'></i>
                    {Object.values(auctionObject.ended)}
                  </td>
                  <td
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
                    key={index}
                  >
                    <i class='fas fa-arrow-up text-emerald-500 mr-4'></i>
                    {Object.values(auctionObject.started)}
                  </td>
                  <td
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
                    key={index}
                  >
                    <i class='fas fa-arrow-up text-emerald-500 mr-4'></i>
                    {Object.values(auctionObject.nft_address)}
                  </td>
                  <td
                    class='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'
                    key={index}
                  >
                    <i class='fas fa-arrow-up text-emerald-500 mr-4'></i>
                    {Object.values(auctionObject.high_bid)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Auctions
