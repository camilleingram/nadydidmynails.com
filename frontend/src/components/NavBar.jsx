import React from 'react'

import cartIcon from "../assets/cart-icon.svg"

const NavBar = () => {
  return (
    <nav className="p-5 md:p-7 w-full flex items-center justify-between sticky top-0 z-20 bg-off-white shrink-0">
        <div className="w-[8%] max-w-[2rem] md:max-w-[5%] flex flex-col gap-1 md:gap-1.5">
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


