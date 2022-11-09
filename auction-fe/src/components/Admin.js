import React, { useEffect, useState } from "react"
import Allowed from "./Allowed"
import Navbar from "./Navbar"
import NotAllowed from "./NotAllowed"

function Admin() {
  const [account, setAccount] = useState("")

  useEffect(() => {
    setAccount(window.ethereum.selectedAddress)
  }, [])

  return account !== "0x6522bC4253B6Dd81aC7867260fC1f9C7F0433396" ? (
    <NotAllowed />
  ) : (
    <Allowed />
  )
}

export default Admin
