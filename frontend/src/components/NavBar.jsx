import React from 'react'

import cartIcon from "../assets/cart-icon.svg"

const NavBar = () => {
  return (
    <nav className="p-5 w-full flex items-center justify-between sticky top-0 z-20 bg-off-white shrink-0 md:p-7 lg:grid lg: grid-cols-3 lg:justify-center lg:items-center">
        <div className="w-[8%] max-w-[2rem] md:max-w-[5%] flex flex-col gap-1 md:gap-1.5 lg:hidden">
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
            <div className="border-solid border-soft-black border-[1.2px] rounded-lg"></div>
        </div>
        <div className="hidden lg:flex lg:w-full lg:gap-4">
          <p className="font-[Merchant] font-light">Home</p>
          <p className="font-[Merchant] font-light">Shop</p>
          <p className="font-[Merchant] font-light">About</p>
          <p className="font-[Merchant] font-light">Contact us</p>
        </div>
        <h1 className="text-soft-black font-sugiyama text-[1.25rem] md:text-[1.75rem] lg:justify-self-center lg:text-[2rem]">nadydidmynails</h1>
        <img src={cartIcon} alt="Shopping cart" className="w-[7%] max-w-[1.8rem] md:w-[4%] lg:w-[30%] stroke-soft-black lg:justify-self-end"/>
    </nav>
  )
}

export default NavBar


