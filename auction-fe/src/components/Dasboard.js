import React, {useState, useEffect} from 'react'
import { ethers } from "ethers"
import "./MetamaskButton"
import {renderAuctions} from "./Auctions"


export default function Dasboard() {
    const [account, setAccount] = useState("");
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
    const [balance, setBalance] = useState("")
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

    const name = 'John Doe'; // need to create an async function to get this value from Backend
    const openAuctions = 3; // Need to create an async function to get the number of open auctions


    return (
        // Start your Project
        <div classNme="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class='flex flex-row '>
                <div class='m-5 break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-10 mb-4 bg-slate-200 text-black'>
                    <span class='uppercase text-md font-bold text-black'>start your auction</span>
                    <div class='flex flex-row items-center space-x-3'>
                        <span class='text-base font-medium'>Congratulations, your are part of our team now. You can trade Carbon Credts now!</span>
                    </div>
                    <div class='flex justify-end items-center'>
                        <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white border-2 border-black text-black'>
                            <a className="hover:text-gray-200" href="/admin">List Your Carbon Credits</a>
                        </button>
                    </div>
                </div>
                <div className="w-[600px] h-[300px] ">
                    <div className="m-5 p-6 border border-gray-300 rounded-xl bg-gray-50">
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <h6 className="text-lg font-semibold leading-none">Your Balance is</h6>
                            <h2 className="text-sm">Your Account {account.slice(0,12)}</h2>
                            <span className="text-3xl text-blue-800"> 30 MATIC</span>
                            <div>
                                <span className="text-xs text-gray-500">Product Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
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
            {/* Balance Card */}



            {/* //Profile Photo */}
            <div class="items-end w-[900px] m-5">
                <div class="flex flex-row space-y-2 items-start justify-center h-full p-4 bg-gray-800 rounded-xl space-x-10">
                    <div class="w-2/3">
                        <p class="w-full text-2xl font-semibold text-white">Hello {name}</p>
                        <p class="mt-2 w-full pb-8 text-sm tracking-wide leading-tight text-white">You have {openAuctions} open auctions </p>
                        <p class="mt-2 w-full pb-8 text-sm tracking-wide leading-tight text-white">Maybe this Auctions can be interesting for you.</p>
                        <div class="rounded w-1/3">
                            <div class="flex ite-center opacity-95 border rounded-lg border-white px-4 ">
                                <a class="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2"  href="/auctions">Open Auctions</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-auto h-">
                        <img class="flex-1 h-full rounded-lg w-[300px]" src="https://pbs.twimg.com/profile_images/1546442267149225984/gcEhSyAV_400x400.jpg" />
                    </div>
                </div>
            </div>
        </div>

    )
}
