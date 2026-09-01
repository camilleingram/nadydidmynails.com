import React from 'react'
import animalPrintImg from "../assets/red-nails.png"
const ItListCard = () => {
  return (
    <div className="bg-cheetah-background w-full max-w-[15rem] sm:w-[50%] rounded-[0.3125rem] flex flex-col justify-center items-center gap-2 justify-self-center sm:shrink-0 ">
            <img src={animalPrintImg} alt="A hand with red press on nails" className="h-[72%] sm:h-[76%] w-[80%] border-soft-black border-[0.1875rem]"/>
            <div className="bg-soft-black w-full">
                <h6 className="font-[Amoresa] text-off-white sm:text-[1.125rem] md:text-[1.5rem] text-center mt-1">Moo-ve It!!</h6>
            </div>
    
        </div>
  )
}

export default ItListCard