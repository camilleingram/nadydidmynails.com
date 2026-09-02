import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full min-h-[20vh] flex flex-wrap content-evenly justify-center text-soft-black">
        <h3 className="w-full text-center font-sugiyama text-[2rem] md:text-[2.25rem] ">nadydidmynails</h3>
        <div className="min-h-[7vh] w-[80%] max-w-104 flex flex-wrap justify-center items-center text-center font-[Merchant] font-extralight text-[0.875rem] md:text-[1.125rem]">
            <p className="w-[34%]">contact us</p>
            <p className="w-[34%]">about us</p>
            <p className="w-[33%]">privacy policy</p>
            <p className="w-[33%]">terms of service</p>
            <p className="w-[33%]">shipping policy</p>
        </div>
        <p className=" w-full text-center font-[Merchant] text-[0.625rem] md:text-[0.875rem] font-extralight">&copy; 2026 Nadydidmynails. All rights reserved.</p>
    </footer>
  )
}

export default Footer