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
      className='bg-[#ea580c] hover:bg-[#ad652be0] rounded-3xl px-5 py-2 mb-2 text-white border border-white font-mono'
    >
      Sign With Metamask
    </button>
  )
}

export default MetamaskButton
