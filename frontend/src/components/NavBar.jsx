import React from 'react'

import cartIcon from "../assets/cart-icon.svg"

const NavBar = () => {
  return (
    <nav className="p-4 w-screen  flex items-center justify-between sticky z-20 bg-off-white shrink-0">
        <div className="w-[8%] max-w-8 md:w-[5%] flex flex-col jusitfy-center gap-1">
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
        </div>
        <h1 className="text-soft-black font-sugiyama text-[1.25rem] md:text-[1.75rem]">nadydidmynails</h1>
        <img src={cartIcon} alt="Shopping cart" className="w-[7%] max-w-[1.8rem] md:w-[4%] stroke-soft-black"/>
    </nav>
  )
}

export default NavBar


