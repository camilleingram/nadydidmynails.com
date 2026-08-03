
import React from 'react'
import NavBar from "../components/NavBar.jsx"
import CollectionCard from '../components/CollectionCard.jsx'
import homeImg from "../assets/nails-holder_.jpeg"
import hawaiianFlowerImg from "../assets/hawaiian-flower.svg"

const Home = () => {
  return (
   <div className="w-screen h-screen bg-off-white overflow-auto">
    <NavBar/>
    <div className="h-[5%] bg-burgundy flex items-center justify-center">
      <h4 className="text-off-white text-[0.75rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h4>
    </div>
    <img src={homeImg} alt="Nails around a vinyl" className="h-[85%] w-screen"/>

    {/* container of all numbers */}
    <div className="h-[8%] w-screen bg-main-green flex items-center gap-[2rem] overflow-hidden relative z-10">
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

    <section className=" pl-4 pr-4 relative z-0">
      <img src={hawaiianFlowerImg} alt="Hawaiian Flower" className="relative bottom-[0.75rem] right-[4rem]"/>
      <h2 className="font-[Amoresa] text-[2rem] relative bottom-[10rem]  ">Shop by Collection</h2>
      <CollectionCard/>

    </section>
   </div>
  )
}

export default Home





