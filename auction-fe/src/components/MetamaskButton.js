import React, { useEffect, useState } from "react"

function MetamaskButton() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)
  const [account, setAccount] = useState("")

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

  return (
    <button
      onClick={connectWallet}
      className='bg-green-800 hover:bg-green-500 rounded p-2 mb-2 text-white'
    >
      WalletButton
    </button>
  )
}

export default MetamaskButton
