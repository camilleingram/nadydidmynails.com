
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
  if (el.getBoundingClientRect().bottom > window.innerHeight + window.scrollX) {
    console.log(' Leaking element:', el);
  }
});
  return (
   <div className="w-screen min-h-screen bg-off-white overflow-x-clip flex flex-col items-center relative">
    <NavBar/>
    {/* coupon banner */}
    <div className=" py-2 md:py-3 w-full bg-burgundy flex items-center justify-center">
      <h4 className="text-off-white text-[0.75rem] md:text-[1rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h4>
    </div>
    {/* homepage video */}
    <img src={homeImg} alt="Nails around a vinyl" className=" w-full h-[90vh]"/>
    
    {/* container of all steps */}
    <div className="p-4 md:p-5 w-full bg-main-green flex items-center justify-center  gap-8 z-10 md:text-[1.125rem] overflow-x-hidden">
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
    <section className=" w-full h-auto py-10 md:py-12 z-0 flex flex-col gap-4 md:gap-5 overflow-hidden relative">
      <img src={hawaiianFlowerImg} alt="Hawaiian Flower" className=" h-auto w-[46%] max-w-[16rem] opacity-60 z-0 absolute -top-4 -left-4"/>
      <h2 className="font-[Amoresa] text-[2rem] md:text-[2.25rem] z-10 relative ml-5 ">Shop by Collection</h2>
      <div className=" flex gap-10 z-10 overflow-x-auto w-full">
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
      </div>
      <img src={dragonflyImg} alt="Dragonfly" className=" h-auto w-[45%] max-w-[16rem]  self-end z-0 absolute -bottom-4 -right-10"/>
    </section>

    {/* picture break */}
    <section className="ml-2 mr-2 my-5 pr-4 pt-4 min-h-[20rem] w-[90%] bg-nails bg-cover bg-center rounded-md shadow-button z-10 flex flex-col items-end gap-1">
      <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">HANDCRAFTED.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">AFFORDABLE.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] md:text-[2rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">YOURS.</h4>
        <button type="button" className=" w-[45%] py-1 max-w-46 bg-none border-soft-black border-2 rounded-md font-[Merchant] font-regular md:text-[1.25rem] text-center  ">Shop the looks</button>
    </section>

    {/*nadys favs */}
    <section className=" w-[90%] md:w-full flex flex-col items-center gap-4 relative py-10 md:py-12">
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[60%] max-w-[24rem]  opacity-60 absolute top-0 md:-top-4 -left-10 "/>
      <h2 className="font-[Amoresa] text-[2rem] md:text-[2.25rem] self-start md:ml-5">Nady's Favs</h2>
      <div className="w-full max-w-[30rem] max-h-[33rem] z-10 grid grid-rows-2 grid-cols-2 gap-2 sm:flex sm:gap-4 sm:overflow-x-auto sm:max-w-full max-h-auto ">
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
      </div>
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[60%] max-w-[20rem] rotate-17 scale-x-[-1] opacity-60 z-0 absolute -bottom-20 md:-bottom-40 right-0"/>
    </section>
    <section className="w-screen min-h-[18rem] bg-main-green flex flex-wrap md:flex-row justify-center items-center md:gap-10 content-evenly rounded-[1.25rem] z-10">
      <MailingList/>
    </section>
    <Footer/>
   </div>
  )
}

export default Home

