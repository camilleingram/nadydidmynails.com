
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
   <div className="w-screen h-screen bg-off-white overflow-y-auto overflow-x-hidden flex flex-wrap justify-center">
    <NavBar/>
    <div className="h-[5%] w-full bg-burgundy flex items-center justify-center">
      <h4 className="text-off-white text-[0.75rem] font-[Merchant] font-extralight ">GET 10% OFF YOUR PURCHASE USE CODE NDMNLAUNCH</h4>
    </div>
    <img src={homeImg} alt="Nails around a vinyl" className="h-[85%] md:h-[98%] w-screen"/>

    {/* container of all numbers */}
    <div className="h-[8%] w-screen bg-main-green flex items-center justify-center gap-8 overflow-hidden relative z-10">
      {/* container of 1 number */}
      <div className="w-[50%] max-w-56 md:w-[25%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">PICK YOUR SET</h3>
        {/* container of pill */}
        <div className="w-[40%] md:w-[39%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">one</h4>
        </div>
      </div>
      {/* container of 1 number */}
      <div className="w-[44%] max-w-49.5 md:w-[22%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">CUSTOMIZE</h3>
        {/* container of pill */}
        <div className="w-[46%] md:w-[44%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">two</h4>
        </div>
      </div>
      {/* container of 1 number */}
      <div className="w-[34%] max-w-38 md:w-[17%] h-[90%] flex shrink-0 items-center justify-between">
        <h3 className="font-[Merchant] text-off-white font-light">APPLY</h3>
        {/* container of pill */}
        <div className="w-[59%] md:w-[57%] h-[55%] bg-off-white rounded-[50%] flex items-center justify-center ">
          <h4 className="font-[Merchant] text-main-green font-light">three</h4>
        </div>
      </div>
    </div>

    <section className=" h-[65%] w-full ml-4 md:ml-5 mr-4 md:mr-5 relative z-0 flex flex-col justify-evenly">
      <img src={hawaiianFlowerImg} alt="Hawaiian Flower" className=" h-auto w-[65%] max-w-68 absolute -top-4 -left-10 "/>
      <h2 className="font-[Amoresa] text-[2rem] ">Shop by Collection</h2>
      <div className="h-[40%] w-full flex justify-center gap-6 overflow-auto z-10  shrink-0">
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
      </div>
      <button type="button" className="bg-light-green self-center shrink-0 h-[9%] w-[55%] max-w-57.5 md:w-[40%] font-[Merchant] font-bold text-off-white text-[1rem] rounded-md  z-10 shadow-button">Shop the Collection</button>
      <img src={dragonflyImg} alt="Dragonfly" className=" h-auto w-[60%] max-w-[15.7rem] absolute bottom-0 -right-12 "/>
    </section>
    <section className="h-[40%] w-full md:h-[45%] md:w-[85%] bg-nails bg-cover bg-clip-content bg-center ml-4 mr-4 rounded-md shadow-button relative z-10 md:bottom-10">
      <div className="h-[60%] w-full flex flex-col items-end mt-4 absolute right-3">
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">HANDCRAFTED.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">AFFORDABLE.</h4>
        <h4 className="font-[Merchant] text-soft-black font-bold text-right text-[1.625rem] text-shadow-[0_9px_4px_rgba(0_0_0/_0.7)]">YOURS.</h4>
        <button type="button" className="h-[22%] w-[40%] max-w-46 bg-none border-soft-black border-2 rounded-md font-[Merchant] font-regular text-center ">Shop the looks</button>
      </div>
    </section>
    <section className="h-[70%] w-full mr-4 ml-4 relative flex flex-col">
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[65%] max-w-68 absolute top-2 -left-6 z-0 "/>
      <h2 className="font-[Amoresa] text-[2rem] absolute top-15">Nady's Favs</h2>
      <div className="h-[60%] w-full absolute top-30 z-10 flex flex-row flex-wrap justify-center gap-6">
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
        <ItListCard/>
      </div>
      <img src={longFlowerImg} alt="Long flower" className="h-auto w-[60%] max-w-68 absolute -bottom-18 -right-25 z-0 -rotate-17 "/>
    </section>
    <section className="h-[35%] w-full  bg-main-green relative z-10 flex flex-wrap justify-center items-center content-evenly rounded-[1.25rem]">
      <MailingList/>
    </section>
    <Footer/>
   </div>
  )
}

export default Home

