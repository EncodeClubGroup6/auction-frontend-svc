import { ethers } from "ethers"

const bigNumberToETHString = (amount) => {
  return ethers.utils.formatEther(amount.toString())
}

export default bigNumberToETHString
