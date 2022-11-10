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
    end_at: "",
    started: "",
    ended: "",
    higher_bidder: "",
    high_bid: "",
  })

  let id = 0
  let counter = 0

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
    setDeployedAuctions(auctionsArray)
    return deployedAuctions
  }

  useEffect(() => {
    fetchAuctions().then((deployedAuctions) => {
      console.log(`deployedAuctions ${deployedAuctions}`)
    })
  }, [])

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
      nft,
      nftId,
      seller,
      endAt,
      started,
      ended,
      highestBidder,
      highestBid,
    }))
  })

  //   return (
  //     <div
  //       md='auto'
  //       key={id++}
  //     >
  //       <div style={{ width: "18rem", marginBottom: "20px" }}>
  //         <div>
  //           <h1>{nft}</h1>
  //           {/* <h3 postId={post.id} />
  //           <h3 postId={post.id} /> */}
  //         </div>
  //       </div>
  //     </div>
  //   )

  // render() {
  //     const htmlElement = Object.values(auctionObject).map(

  //         );
  //         return (<>{htmlElement}</>)
  //   }

  return <div>Hello auction</div>
}

export default Auctions
