import React, { useState, useEffect } from 'react'
import { renderAuctions } from "./Auctions"
import bigNumberToETHString from "./utils/bigNumberToETHString"

export default function OpenAuctionsCard() {
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
    return (
        <div>
            {/* Open auctions */}
            <div class="bg-white rounded overflow-hidden shadow-lg m-5">
                <div class="text-center p-6 bg-gray-800 border-b">
                    <p class="pt-2 text-lg font-semibold text-gray-50">Open Auctions</p>
                    <p class="text-sm text-gray-100">Address {Object.values(auctionObject)[0]}</p>
                    <p class="text-sm text-gray-100">End At {Object.values(auctionObject)[3]}</p>

                </div>
                <div class="border-b">
                    <div href="/account/campaigns" >
                        <a class="px-4 py-2 hover:bg-gray-100 flex">
                            <div class="text-green-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div class="pl-3">
                                <p class="text-sm font-medium text-gray-800 leading-none">
                                    {auctionObject[4]}
                                </p>
                                <p class="text-xs text-gray-500">{Object.values(auctionObject)[5]}</p>
                            </div>
                        </a>
                    </div>
                    <div href="/account/donations" >
                        <a class="px-4 py-2 hover:bg-gray-100 flex">
                            <div class="text-gray-800">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5"
                                >
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div class="pl-3">
                                <p class="text-sm text-gray-500 leading-none">Actual Bid {Object.values(auctionObject)[10]}</p>
                                <p class="text-xs text-gray-500">Highest bid for this NFT {Object.values(auctionObject)[7]}</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="flex justify-center items-center">
                    <div class="m-5">
                        <button
                            class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-900"
                        >
                            Bid This Auction
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
