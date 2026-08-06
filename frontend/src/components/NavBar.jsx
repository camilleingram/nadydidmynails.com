import React from 'react'

import cartIcon from "../assets/cart-icon.svg"

const NavBar = () => {
  return (
    <nav className="h-[10%] w-screen pl-4 pr-4 flex items-center justify-between sticky top-0 z-20 bg-off-white">
        <div className="h-[18%] w-[8%] md:w-[5%] flex flex-col justify-between">
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
        </div>
        <h1 className="text-soft-black font-sugiyama text-[1.25rem] md:text-[1.5rem]">nadydidmynails</h1>
        <img src={cartIcon} alt="Shopping cart" className="w-[7%] md:w-[4%] stroke-soft-black"/>
    </nav>
  )
}

export default NavBar


