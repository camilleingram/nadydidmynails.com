
import React from 'react'
import NavBar from "../components/NavBar.jsx"
import homeImg from "../assets/nails-holder_.jpeg"

const Home = () => {
  return (
   <div className="w-screen h-screen bg-off-white">
    <NavBar/>
    <div className="h-[5%] bg-burgundy flex items-center justify-center">
      <h2 className="text-off-white text-[0.75rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h2>
    </div>
    <img src={homeImg} alt="Nails around a vinyl" className="h-[85%] w-screen"/>

    {/* container of all numbers */}
    <div className="h-[8%] w-screen bg-main-green flex items-center gap-[2rem]">
      {/* container of 1 number */}
      <div className="w-[50%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">PICK YOUR SET</h3>
        {/* container of pill */}
        <div className="w-[40%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">one</h4>
        </div>
      </div>
      {/* container of 1 number */}
      <div className="w-[44%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">CUSTOMIZE</h3>
        {/* container of pill */}
        <div className="w-[46%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">two</h4>
        </div>
      </div>
      {/* container of 1 number */}
      <div className="w-[34%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">APPLY</h3>
        {/* container of pill */}
        <div className="w-[59%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">three</h4>
        </div>
      </div>
      
   
    </div>

   </div>
  )
}

export default Home





