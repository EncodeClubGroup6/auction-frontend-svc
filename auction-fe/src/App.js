import React, { useEffect, useState } from "react"
import { ethers } from "ethers"
import CreateAuction from "./components/CreateAuction"
import MetamaskButton from "./components/MetamaskButton"

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <MetamaskButton />
      <CreateAuction />
    </>
  )
}

export default App
