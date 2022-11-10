import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import bigNumberToETHString from "./utils/bigNumberToETHString"

function MetamaskButton() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)
  const [account, setAccount] = useState("")
  const [balance, setBalance] = useState("")

  useEffect(() => {
    if (window.ethereum) {
      setIsMetamaskInstalled(true)
      if(account != ""){
        localStorage.setItem('accountKey', JSON.stringify(account))
      }
    }
  }, [account])

  function getStorageValue() {
    const saved = localStorage.getItem('accountKey');
    console.log(saved)
    return JSON.parse(saved)
  }

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    setAccount(accounts[0])
  }

  useEffect(() => {
    const walletBalance = async () => {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      })
      setBalance(ethers.utils.formatEther(balance))
    }
    walletBalance()
    if(getStorageValue() != ""){
      setAccount(getStorageValue())
    }
  }, [account])

  return !account ? (
    <button
      onClick={connectWallet}
      className='bg-[#ea580c] rounded-3xl px-5 py-2 mb-2 text-white border border-white font-mono'
    >
      Sign With Metamask
    </button>
  ) : (
    <>
      <h1>{balance} MATIC</h1>
      <button
        onClick={connectWallet}
        className='bg-[#ad652be0] rounded-3xl px-5 py-2 mb-2 text-white border border-white font-mono'
      >
        {account.slice(0, 6)}...
        {account.slice(account.length - 4, account.length)}
      </button>
    </>
  )
}

export default MetamaskButton
