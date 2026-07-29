import React from 'react'

import cartIcon from "../assets/cart-icon.svg"

const NavBar = () => {
  return (
    <nav className="h-[10%] ml-4 mr-4 mb-5 flex items-end justify-between">
        <div className="h-[18%] w-[8%] flex flex-col justify-between">
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
        </div>
        <h1 className="text-soft-black font-sugiyama text-[1.25rem]">nadydidmynails</h1>
        <img src={cartIcon} alt="Shopping cart" className="w-[7%] stroke-soft-black"/>
    </nav>
  )
}

export default NavBar


