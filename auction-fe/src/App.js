import React, { useEffect, useState } from "react"
import { ethers } from "ethers"
import CreateAuction from "./components/CreateAuction"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <CreateAuction />
    </>
  )
}

export default App
