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
      setDeployedAuctions(auctionsArray)
    }

    fetchAuctions().then((deployedAuctions) => {
      console.log(`deployedAuctions ${deployedAuctions}`)
    })
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

  const render = Object.values(auctionObject).map((el, i) => {
    return (
      <div
        md='auto'
        key={i}
      >
        <div style={{ width: "18rem", marginBottom: "20px" }}>
          <div>
            <h1>{el.nft_address}</h1>
            <h1>{el.nft_id}</h1>
            <h1>{el.seller}</h1>
            <h1>{el.end_at}</h1>
            <h1>{el.started}</h1>
            <h1>{el.ended}</h1>
            <h1>{el.higher_bidder}</h1>
            <h1>{el.high_bid}</h1>
            {/* <h3 postId={post.id} />
              <h3 postId={post.id} /> */}
          </div>
        </div>
      </div>
    )
  })

  // render() {
  //     const htmlElement = Object.values(auctionObject).map(

  //         );
  //         return (<>{htmlElement}</>)
  //   }

  return <div>Hello</div>
}

export default Auctions
