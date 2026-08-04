import React from 'react'
import animalPrintImg from "../assets/red-nails.png"
const ItListCard = () => {
  return (
    <div className="bg-cheetah-background h-[52%] w-[42%] rounded-[0.3125rem] flex flex-col justify-center items-center gap-[0.5rem] shrink-0 ">
            <img src={animalPrintImg} alt="A hand with red press on nails" className="h-[72%] w-[80%] border-soft-black border-[0.1875rem]"/>
            <div className="bg-soft-black w-full">
                <h6 className="font-[Amoresa] text-off-white text-[1.125rem] text-center relative top-[0.3rem]">Moo-ve It!!</h6>
            </div>
    
        </div>
  )
}

export default ItListCard