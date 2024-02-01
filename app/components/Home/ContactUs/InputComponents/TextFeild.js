'use client'
import {React,useEffect} from 'react'



const TextFeild = ({ Holders }) => {

  useEffect(() => {
    const init = async () => {
      const { Input  ,initTE } = await import("tw-elements");
      initTE({ Input  });
  
      // setUser(localStorage.getItem("Username"))
  
    };
    init();
  }, []);
  

  return (
    <>
    <input type="text" className="w-full h-16 bg-dark rounded-2xl border-2 border-[#ABABAB] focus:border-system-green focus:ring-2 focus:ring-system-green text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={`${Holders}`} />
    </>
  );
}

export default TextFeild;