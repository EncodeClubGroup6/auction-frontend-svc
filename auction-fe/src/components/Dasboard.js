import React, { useState, useEffect } from 'react'
import { ethers } from "ethers"
import "./MetamaskButton"
import { renderAuctions } from "./Auctions"
import bigNumberToETHString from "./utils/bigNumberToETHString"
import OpenAuctionsCard from './OpenAuctionsCard'


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
        <div className="w-full">
            <div className="px-4 py-12 mx-auto max-w-8xl sm:px-6 lg:px-4">
                <div className="grid flex-col grid-cols-1 gap-6 d-flex sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div class='flex flex-row w-5/6 justify-center'>
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
                            <div className="p-6 m-5 border border-gray-300 rounded-xl bg-gray-50">
                                <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                                    <h6 className="text-lg font-semibold leading-none">Your Balance is</h6>
                                    <h2 className="text-sm">Your Account {account.slice(0, 12)}</h2>
                                    <span className="text-3xl text-blue-800"> {balance} MATIC</span>
                                    <div>
                                        <span className="text-xs text-gray-500">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    {/* Balance Card */}

                    <OpenAuctionsCard />

                    {/* //Profile Photo */}
                    <div class="flex flex-row w-5/6 justify-center">
                        <div class="flex flex-row space-y-2 items-start justify-center h-full p-4 bg-gray-800 rounded-xl space-x-10">
                            <div class="w-2/3">
                                <p class="w-full text-2xl font-semibold text-white">Hello {name}</p>
                                <p class="mt-2 w-full pb-8 text-sm tracking-wide leading-tight text-white">You have {openAuctions} open auctions </p>
                                <p class="mt-2 w-full pb-8 text-sm tracking-wide leading-tight text-white">Maybe this Auctions can be interesting for you.</p>
                                <div class="rounded w-1/3">
                                    <div class="flex ite-center opacity-95 border rounded-lg border-white px-4 ">
                                        <a class="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2" href="/auctions">Open Auctions</a>
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto h-">
                                <img class="flex-1 h-full rounded-lg w-[300px]" src="https://pbs.twimg.com/profile_images/1546442267149225984/gcEhSyAV_400x400.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
