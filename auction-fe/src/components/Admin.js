import React, { useEffect, useState } from "react"
import Allowed from "./Allowed"
import Navbar from "./Navbar"

function Admin() {
  const [account, setAccount] = useState("")

  useEffect(() => {
    setAccount(window.ethereum.selectedAddress)
  }, [account])

  return (
    <>
      <Allowed />
    </>
  )
  // return account !== "0x6522bC4253B6Dd81aC7867260fC1f9C7F0433396" ? (
  //   <Allowed />
  // ) : (
  //   <Allowed />
  // )
}

export default Admin
