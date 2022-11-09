import React, { useEffect, useState } from "react"
import { ethers } from "ethers"
import CreateAuction from "./components/CreateAuction"
import MetamaskButton from "./components/MetamaskButton"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      {/* <MetamaskButton /> */}
      <CreateAuction />
    </>
  )
}

export default App
