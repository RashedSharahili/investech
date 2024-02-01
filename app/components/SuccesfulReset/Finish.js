import React from 'react'
import HeroLines from '../../../public/assets/hero/hero_lines.png'

function Finish() {
  return (
    <>
      <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${HeroLines.src})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className='flex flex-col justify-center text-black gap-[40px]'>
          <h1 className=' text-system-cyan text-[69px] flex justify-center'> تم تغيير كلمة المرور </h1>
          <p className='text-[30px] flex justify-center'> تم تغيير كلمة المرور الخاصة بك بنجاح </p>
          <div className='grid lg:grid-cols-3 gap-12 items-center'>
                                      <div></div>
                                      <button
                                          type="submit"
                                          className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] justify-center rounded bg-system-cyan px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-system-cyan-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-system-cyan-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-system-cyan-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                          data-te-ripple-init
                                          data-te-ripple-color="light">
                                          تسجيل الدخول
                                      </button>
                                      <div></div>
                                  </div>
        </div>
      </div>
    </>
  )
}

export default Finish