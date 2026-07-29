
import React from 'react'
import NavBar from "../components/NavBar.jsx"
import homeImg from "../assets/nails-holder_.jpeg"

const Home = () => {
  return (
   <div className="w-screen h-screen bg-off-white overflow-scroll">
    <NavBar/>
    <div className="h-[5%] bg-burgundy flex items-center justify-center">
      <h2 className="text-off-white text-[0.75rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h2>
    </div>
    <img src={homeImg} alt="Nails around a vinyl"/>

   </div>
  )
}

export default Home
