
import React from 'react'
import NavBar from "../components/NavBar.jsx"
import CollectionCard from '../components/CollectionCard.jsx'
import ItListCard from '../components/ItListCard.jsx'
import MailingList from '../components/MailingList.jsx'
import Footer from "../components/Footer.jsx"


import homeImg from "../assets/nails-holder_.jpeg"
import hawaiianFlowerImg from "../assets/hawaiian-flower.webp"
import dragonflyImg from "../assets/dragonfly.webp"
import longFlowerImg from "../assets/long-flower.webp"

const Home = () => {
  return (
   <div className="w-screen h-screen bg-off-white overflow-y-auto overflow-x-hidden flex flex-wrap justify-center ">
    <NavBar/>
    <div className="h-[5%] w-full bg-burgundy flex items-center justify-center">
      <h4 className="text-off-white text-[0.75rem] md:text-[1rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h4>
    </div>
    <img src={homeImg} alt="Nails around a vinyl" className="h-[85%] md:h-[98%] w-screen"/>

    {/* container of all steps */}
    <div className="h-[8%] w-screen bg-main-green flex items-center justify-center gap-8 relative z-10 md:text-[1.125rem]">
      {/* container of pick your set */}
      <div className="w-[50%] max-w-56 md:w-[30%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">PICK YOUR SET</h3>
        {/* container of pill */}
        <div className="w-[40%] md:w-[41%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">one</h4>
        </div>
      </div>
      {/* container of customize */}
      <div className="w-[44%] max-w-49.5 md:w-[28%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">CUSTOMIZE</h3>
        {/* container of pill */}
        <div className="w-[46%] md:w-[46%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">two</h4>
        </div>
      </div>
      {/* container of apply */}
      <div className="w-[34%] max-w-38 md:w-[20%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">APPLY</h3>
        {/* container of pill */}
        <div className="w-[59%] md:w-[60%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">three</h4>
        </div>
      </div>
    </div>

    <section className=" h-[40%] w-full ml-4 md:ml-5 mr-4 md:mr-5 mb-4 md:mb-5 relative z-0 flex flex-col justify-center">
      <img src={hawaiianFlowerImg} alt="Hawaiian Flower" className=" h-auto w-[50%] max-w-68 absolute -translate-y-28 left-0 -translate-x-10 opacity-60 "/>
      <h2 className="font-[Amoresa] text-[2rem] md:text-[2.25rem] absolute top-10 ">Shop by Collection</h2>
      <div className="h-[60%] max-h-[55%] w-full flex gap-4 overflow-y-hidden z-10 shrink-0 absolute top-25 md:top-27 ">
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
      </div>
      {/* <button type="button" className="bg-brown self-center shrink-0 h-[12%] w-[58%] max-w-57.5 md:w-[40%] font-[Merchant] font-bold text-off-white text-[1rem] rounded-md  z-10 absolute bottom-10 md:bottom-20 shadow-button">Shop the Collection</button> */}
      <img src={dragonflyImg} alt="Dragonfly" className=" h-auto w-[60%] max-w-62 absolute bottom-0 right-0 translate-x-10 opacity-60 "/>
    </section>
    <section className="h-[40%] w-full md:h-[35%] bg-nails bg-cover bg-clip-content bg-center ml-4 mr-4 mb-4 rounded-md shadow-button relative z-10 ">
      <div className="h-[60%] w-[60%] flex flex-col items-end mt-4 absolute right-3">
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">HANDCRAFTED.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">AFFORDABLE.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">YOURS.</h4>
        <button type="button" className="h-[22%] w-[65%] max-w-46 bg-none border-soft-black border-2 rounded-md font-[Merchant] font-regular md:text-[1.25rem] text-center md:absolute md:bottom-3 ">Shop the looks</button>
      </div>
    </section>
    <section className="h-[70%] sm:h-[50%] w-full mr-4 ml-4 mb-4 relative flex flex-col items-center">
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[70%] max-w-68 absolute top-2 left-0 -translate-x-6 z-0 opacity-60"/>
      <h2 className="font-[Amoresa] text-[2rem] md:text-[2.25rem] absolute top-10 self-start">Nady's Favs</h2>
      <div className="h-[80%] sm:h-[60%] w-[90%] max-w-126 sm:w-full sm:max-w-none absolute  top-28 z-10 grid grid-rows-2 grid-cols-2 gap-2 sm:flex sm:justify-left sm:gap-4 sm:overflow-x-auto">
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
      </div>
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[60%] max-w-68 absolute top-5 right-0 translate-x-25 z-0 -rotate-17 opacity-60 "/>
    </section>
    <section className="h-[35%] w-full  bg-main-green z-10 flex flex-wrap md:flex-row justify-center items-center md:gap-10 content-evenly rounded-[1.25rem]">
      <MailingList/>
    </section>
    <Footer/>
   </div>
  )
}

export default Home

