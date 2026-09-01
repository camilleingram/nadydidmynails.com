import React from 'react'
import animalPrintImg from "../assets/red-nails.png"

const CollectionCard = () => {
  return (
    <div className="bg-cheetah-background bg-size-[40%] w-[40%] max-w-[11.5rem] rounded-[0.3125rem] flex flex-col justify-center items-center gap-2 shrink-0">
        <img src={animalPrintImg} alt="A hand with red press on nails" className="h-[72%] w-[80%] border-off-white border-2 "/>
        <div className="bg-light-green w-full flex justify-center items-center">
            <h6 className="font-[Amoresa] text-soft-black text-[1rem] md:text-[1.25rem] text-center  translate-y-1">Animal Print</h6>
        </div>

    </div>
  )
}

export default CollectionCard