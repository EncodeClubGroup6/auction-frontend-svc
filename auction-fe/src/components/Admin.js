import React, { useEffect, useState } from "react"
import Allowed from "./Allowed"
import Navbar from "./Navbar"
import NotAllowed from "./NotAllowed"

function Admin() {
  const [account, setAccount] = useState("")

  function getStorageValue() {
    const saved = localStorage.getItem('accountKey');
    return JSON.parse(saved)
  }

  return getStorageValue() !== "0x68eff4ec1654f5ac1a4c5a158f37bfb878024921" ? (
    <NotAllowed />
  ) : (
    <Allowed />
  )

}

export default Admin
