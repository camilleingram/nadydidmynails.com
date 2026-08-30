import React from 'react'
import animalPrintImg from "../assets/red-nails.png"

const CollectionCard = () => {
  return (
    <div className="bg-cheetah-background bg-size-[40%] h-full w-[40%] max-w-40 md:max-w-[25%] rounded-[0.3125rem] flex flex-col justify-center items-center gap-2 shrink-0 col-">
        <img src={animalPrintImg} alt="A hand with red press on nails" className="h-[72%] w-[80%] border-off-white border-2 "/>
        <div className="bg-light-green w-full h-[12%] md:h-[12%] flex justify-center items-center">
            <h6 className="font-[Amoresa] text-soft-black text-[1rem] md:text-[1.25rem] text-center relative top-[0.3rem] ">Animal Print</h6>
        </div>

    </div>
  )
}

export default CollectionCard