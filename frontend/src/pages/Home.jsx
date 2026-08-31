
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
  document.querySelectorAll('*').forEach(el => {
  if (el.getBoundingClientRect().bottom > window.innerHeight + window.scrollY) {
    console.log(' Leaking element:', el);
  }
});
  return (
   <div className="w-screen min-h-screen bg-off-white overflow-y-auto overflow-x-hidden flex flex-col items-center">
    <NavBar/>
    {/* coupon banner */}
    <div className=" py-2 w-full bg-burgundy flex items-center justify-center">
      <h4 className="text-off-white text-[0.75rem] md:text-[1rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h4>
    </div>
    {/* homepage video */}
    <img src={homeImg} alt="Nails around a vinyl" className="w-screen"/>
    
    {/* container of all steps */}
    <div className="p-4 w-full bg-main-green flex items-center justify-center  gap-8 z-10 md:text-[1.125rem]">
      {/* container of pick your set */}
      <div className=" w-[55%] max-w-[13.5rem] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light text-nowrap">PICK YOUR SET</h3>
        {/* container of pill */}
        <div className="py-0.5 w-[40%] md:w-[41%] bg-off-white rounded-[50%] text-center">
          <h4 className="font-[Merchant] text-main-green font-light">one</h4>
        </div>
      </div>
      {/* container of customize */}
      <div className="w-[49%] max-w-[12rem] md:w-[28%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">CUSTOMIZE</h3>
        {/* container of pill */}
        <div className=" py-0.5 w-[46%] md:w-[46%] bg-off-white rounded-[50%] text-center">
          <h4 className="font-[Merchant] text-main-green font-light">two</h4>
        </div>
      </div>
      {/* container of apply */}
      <div className="w-[37%] max-w-[9.5rem] md:w-[20%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">APPLY</h3>
        {/* container of pill */}
        <div className="p-[2.5px] w-[59%] md:w-[60%] bg-off-white rounded-[50%] text-center ">
          <h4 className="font-[Merchant] text-main-green font-light">three</h4>
        </div>
      </div>
    </div>

    {/* collection section */}
    <section className=" w-full px-4  z-0 flex flex-col justify-center relative ">
      <img src={hawaiianFlowerImg} alt="Hawaiian Flower" className=" h-auto w-[46%] max-w-68 opacity-60 -mt-2 -ml-10"/>
      <h2 className="font-[Amoresa] text-[2rem] md:text-[2.25rem] -mt-28">Shop by Collection</h2>
      <div className=" flex gap-10 z-10 shrink-0 mt-3 overflow-x-scroll">
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
      </div>
      {/* <button type="button" className="bg-brown self-center shrink-0 h-[12%] w-[58%] max-w-57.5 md:w-[40%] font-[Merchant] font-bold text-off-white text-[1rem] rounded-md  z-10 absolute bottom-10 md:bottom-20 shadow-button">Shop the Collection</button> */}
      <img src={dragonflyImg} alt="Dragonfly" className=" h-auto w-[45%] max-w-68 -mt-28 ml-55"/>
    </section>

    {/* picture break */}
    <section className=" mr-5 ml-5 px-4 pt-4 mb-2 -mt-1 min-h-[20rem] w-[90%] bg-nails bg-cover bg-center rounded-md shadow-button z-10 flex flex-col items-end gap-1">
      <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">HANDCRAFTED.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">AFFORDABLE.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">YOURS.</h4>
        <button type="button" className=" w-[45%] py-1 max-w-46 bg-none border-soft-black border-2 rounded-md font-[Merchant] font-regular md:text-[1.25rem] text-center  ">Shop the looks</button>
    </section>
    <section className=" w-[90%] mr-4 ml-4 flex flex-col items-center">
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[60%] max-w-68  opacity-60 -ml-50"/>
      <h2 className="font-[Amoresa] text-[2rem] md:text-[2.25rem] self-start -mt-88">Nady's Favs</h2>
      <div className="w-[90%] max-w-126 z-10 grid grid-rows-2 grid-cols-2 gap-2 sm:flex sm:justify-left sm:gap-4 sm:overflow-x-auto mt-2">
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
      </div>
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[60%] max-w-68 rotate-17 scale-x-[-1] opacity-60 -mt-80 -mr-40"/>
    </section>
    {/* <section className="h-[35%] md:h-[25%] w-full  bg-main-green z-10 flex flex-wrap md:flex-row justify-center items-center md:gap-10 content-evenly rounded-[1.25rem]">
      <MailingList/>
    </section>
    <Footer/> */}
   </div>
  )
}

export default Home

