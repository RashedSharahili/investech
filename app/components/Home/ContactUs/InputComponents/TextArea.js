"use client"

import React from "react"

const TextArea = (label, labalcolor, className , ...props) => {
  return(
    <>
      <div className= "flex flex-col mt-4 mb-2">
        <div className="flex text-center  align-middle gap-2">
        </div>
          <textarea 
          rows={5}
          className="form-control w-full bg-dark rounded-2xl border-2 border-[#ABABAB] focus:border-system-green focus:ring-2 focus:ring-system-green text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none" placeholder="البيانات"/>
      </div>
    </>
  )
}

export default TextArea