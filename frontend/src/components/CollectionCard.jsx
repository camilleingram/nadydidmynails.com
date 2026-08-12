import React from 'react'
import animalPrintImg from "../assets/red-nails.png"

const CollectionCard = () => {
  return (
    <div className="bg-cheetah-background h-full w-[48%] max-w-50 md:w-[26%] rounded-[0.3125rem] flex flex-col justify-center items-center gap-2 shrink-0">
        <img src={animalPrintImg} alt="A hand with red press on nails" className="h-[72%] w-[80%] border-soft-black border-[0.1875rem] "/>
        <div className="bg-soft-black w-full h-[12%] md:h-[13%] flex justify-center items-center">
            <h6 className="font-[Amoresa] text-off-white text-[1.25rem] md:text-[1.375rem] text-center relative top-[0.2rem] ">Animal Print</h6>
        </div>

    </div>
  )
}

export default CollectionCard