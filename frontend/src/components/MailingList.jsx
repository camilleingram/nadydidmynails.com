import React from 'react'

const MailingList = () => {
  return (
    <>
        <div className="justify-items-center self-center">
           <h3 className="font-[Amoresa] text-off-white text-[2rem]">Be an Early Bird</h3>
            <p className="font-[Merchant] font-extralight text-[0.75rem] text-center text-off-white w-[65%]">Be the first to know about exclusive deals and new releases by joining our mailing list</p> 
        </div>
        
        {/* add action and method attributes */}
        <form name="mailing-list" className="flex flex-col justify-between gap-4 h-[35%] w-[70%]">
            <label htmlFor="mailing-email" className="sr-only">Enter your email</label>
            <input type="email" id="mailing-email" placeholder="Email" className="bg-off-white pr-2 pl-2 h-[40%] font-[Merchant] text-soft-black font-light text-[0.875rem] placeholder:text-soft-black placeholder:opacity-50 shrink-0" />
            <button for="mailing-list" type="submit" className="bg-brown h-[40%] border-off-white border-2 rounded-[0.3125rem] font-[Merchant] text-off-white text-[0.875rem] text-center font-light shrink-0">Join now</button>
        </form>
    </>
  )
}

export default MailingList