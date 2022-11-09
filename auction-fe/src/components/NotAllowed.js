import React from "react"
import Navbar from "./Navbar"

function NotAllowed() {
  return <>
    <Navbar />
    <div class="mt-5 max-w-2xl mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">You are not Allowed to see this page</h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Sorry, Only the owners of the contract can see this page.</p>
          <div class="flex justify-center">
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Back to the Main Page
            </a>
          </div>

        </div>
      </div>
    </div>
  </>
}

export default NotAllowed
