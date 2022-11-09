import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import bigNumberToETHString from "./utils/bigNumberToETHString"

function MetamaskButton() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)
  const [account, setAccount] = useState("")
  const [balance, setBalance] = useState("")

  // const walletBalance = async () => {
  //   const metamaskWalletProvider = new ethers.providers.Web3Provider(
  //     window.ethereum
  //   )
  //   const signer = await metamaskWalletProvider.getSigner()
  //   const ethBalance = await signer.getBalance()
  //   bigNumberToETHString(ethBalance)
  // }
  // useEffect(() => {
  //   if (account !== "") {
  //     setBalance(walletBalance.toString())
  //   }
  // }, [balance])

  useEffect(() => {
    if (window.ethereum) {
      setIsMetamaskInstalled(true)
    }
  }, [])

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    setAccount(accounts[0])
  }

  return !account ? (
    <button
      onClick={connectWallet}
      className='bg-[#ea580c] hover:bg-[#ad652be0] rounded-3xl px-5 py-2 mb-2 text-white border border-white font-mono'
    >
      Sign With Metamask
    </button>
  ) : (
    <>
      {/* <h1>{balance}</h1> */}
      <h1>
        {account.slice(0, 6)}...
        {account.slice(account.length - 4, account.length)}
      </h1>
    </>
  )
}

export default MetamaskButton
