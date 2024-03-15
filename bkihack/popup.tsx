import { useState } from "react"
import "./style.css"
import Frame from "data-base64:~assets/Frame.svg"


function IndexPopup() {

  return (
    <div className="flex flex-col bg-[#248BD6] h-48 w-96 justify-center items-center">
      <img src={Frame} className="h-24"/>
      <h1 className="text-white text-2xl font-semibold font-montserrat">Welcome</h1>
      <p className="text-white font-medium text-xs">You are secured by Sheltered</p>
    </div>
  )
}

export default IndexPopup
