import React from 'react'
import animalPrintImg from "../assets/red-nails.png"

const CollectionCard = () => {
  return (
    <div className="bg-cheetah-background bg-size-[40%] h-full w-[35%] max-w-40 md:w-[26%] rounded-[0.3125rem] flex flex-col justify-center items-center gap-2 shrink-0 col-">
        <img src={animalPrintImg} alt="A hand with red press on nails" className="h-[72%] w-[80%] border-off-white border-2 "/>
        <div className="bg-light-green w-full h-[12%] md:h-[13%] flex justify-center items-center">
            <h6 className="font-[Amoresa] text-soft-black text-[1rem] md:text-[1.125rem] text-center relative top-[0.2rem] ">Animal Print</h6>
        </div>

    </div>
  )
}

export default CollectionCard