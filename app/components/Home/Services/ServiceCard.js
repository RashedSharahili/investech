"use client"
import React from 'react'
import Image from 'next/image'

function ServiceCard(props) {
    return (
        <>
            <div className='relative flex flex-col gap-3 p-6 pb-10 rounded-lg lg:w-72 md:w-72'>
                <div className='absolute grid w-[70px] h-[70px] p-4 rounded-lg place-items-center -top-8 rihgt-14 bg-[#73bca24e]'>
                    {/* <img src={props.icon} alt="أيقونة" /> */}
                    <div className='relative'>
                        <div className='absolute w-[70px] h-[70px] p-4 rounded-lg place-items-center -top-14 -left-5 bg-system-green'>
                            <Image src={props.icon} alt="أيقونة" />
                        </div>
                    </div>
                </div>

                <h1 className='mt-10 text-xl font-bold text-system-cyan'>
                    {props.title}
                </h1>
                <p className='font-semibold text-system-green'>
                    {props.body}
                </p>
            </div>
        </>
    )
}

export default ServiceCard