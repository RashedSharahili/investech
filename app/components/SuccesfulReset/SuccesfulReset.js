import React from 'react'
import HeroLines from '../../../public/assets/hero/hero_lines.png'

function SuccesfulReset() {
  return (
    <>
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${HeroLines.src})`, backgroundPosition: "center", backgroundSize: "cover" }}>
    <div className='flex flex-col justify-center text-black gap-[40px]'>
      <h1 className=' text-system-cyan text-[69px] flex justify-center'> إعادة تعيين كلمة المرور </h1>
      <p className='text-[30px] flex justify-center'> يرجى إدخال كلمة المرور الجديدة لحسابك </p>
                                  {/* <!--E-mail input or number--> */}
                                <div className='flex justify-center'>
                                  <div className="relative mb-6 w-[648px] " data-te-input-wrapper-init>
                                      <input
                                          type="email"
                                          className="peer border-b-2 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                          id="exampleInputEmail2"
                                          aria-describedby="emailHelp"
                                          placeholder="Enter email" />

                                      <label
                                          htmlFor="exampleInputEmail2"
                                          className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                      > كلمة المرور  </label>
                                  </div>
                                </div>
                                  {/* <!--E-mail input or number--> */}
                                <div className='flex justify-center'>
                                  <div className="relative mb-6 w-[648px] " data-te-input-wrapper-init>
                                      <input
                                          type="email"
                                          className="peer border-b-2 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                          id="exampleInputEmail2"
                                          aria-describedby="emailHelp"
                                          placeholder="Enter email" />

                                      <label
                                          htmlFor="exampleInputEmail2"
                                          className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                      > تأكيد كلمة المرور الجديدة </label>
                                      
                                  </div>
                                </div>


                                {/* <!--submit button--> */}
                                <div className='grid lg:grid-cols-3 gap-12 items-center'>
                                      <div></div>
                                      <button
                                          type="submit"
                                          className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] justify-center rounded bg-system-cyan px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-system-cyan-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-system-cyan-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-system-cyan-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                          data-te-ripple-init
                                          data-te-ripple-color="light">
                                          إرسال
                                      </button>
                                      <div></div>
                                  </div>


    </div>
</div>


</>
  )
}

export default SuccesfulReset