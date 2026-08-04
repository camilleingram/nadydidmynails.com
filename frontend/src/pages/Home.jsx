
import React from 'react'
import NavBar from "../components/NavBar.jsx"
import CollectionCard from '../components/CollectionCard.jsx'
import ItListCard from '../components/ItListCard.jsx'

import homeImg from "../assets/nails-holder_.jpeg"
import hawaiianFlowerImg from "../assets/hawaiian-flower.svg"
import dragonflyImg from "../assets/dragonfly.svg"
import longFlowerImg from "../assets/long-flower.svg"

const Home = () => {
  return (
   <div className="w-screen h-screen bg-off-white overflow-y-auto overflow-x-hidden">
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

    <section className=" h-[70%] ml-4 mr-4 relative z-0 flex flex-col">
      <img src={hawaiianFlowerImg} alt="Hawaiian Flower" className=" h-[40%] w-[65%] relative bottom-[0.75rem] right-[4rem]"/>
      <h2 className="font-[Amoresa] text-[2rem] relative bottom-[9.5rem]  ">Shop by Collection</h2>
      <div className="h-[40%] w-full flex gap-[1.5rem] overflow-auto relative z-10 bottom-[7.5rem] shrink-0">
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
      </div>
      <button type="button" className="bg-light-green self-center shrink-0 h-[9%] w-[55%] font-[Merchant] font-bold text-off-white text-[1rem] rounded-[0.375rem] relative z-10 bottom-[4.5rem] shadow-button">Shop the Collection</button>
      <img src={dragonflyImg} alt="Dragonfly" className=" h-[40%] w-[65%] relative left-46 bottom-44 z-0"/>
    </section>
    <section className="h-[40%] bg-nails bg-cover bg-clip-content bg-center ml-4 mr-4 rounded-[0.375rem] shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
      <div className="h-[60%] w-full flex flex-col items-end relative top-12 right-2">
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.5)]">HANDCRAFTED.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.5)]">AFFORDABLE.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.5)]">YOURS.</h4>
        <button type="button" className="h-[22%] w-[40%] bg-none border-soft-black border-2 rounded-md font-[Merchant] font-regular text-center ">Shop the looks</button>
      </div>
    </section>
    <section className="h-[80%] mr-4 ml-4 ">
      <img src={longFlowerImg} alt="Long flower" className="h-[70%] relative z-0 right-6 "/>
      <h2 className="font-[Amoresa] text-[2rem] relative bottom-95">Nady's Favs</h2>
      <div className="h-[60%] relative z-10 bottom-92 flex flex-row flex-wrap justify-center gap-[1.5rem] ">
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
      </div>
      <img src={longFlowerImg} alt="Long flower" className="h-[65%] relative bottom-144 left-52 -rotate-17 "/>
      
    </section>
   </div>
  )
}

export default Home
