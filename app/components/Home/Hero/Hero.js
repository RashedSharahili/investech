import React from 'react'
import { Tajawal } from 'next/font/google'
import Image from 'next/image'
import Lines from '../../../../public/assets/navbar/new_logo/investech1.png'
import ArrowLogo from '../../../../public/assets/hero/arrow_logo.svg'
import HeroRight from '../../../../public/assets/hero/hero_right.png'
import HeroLeft from '../../../../public/assets/hero/hero_left.png'
import HeroLines from '../../../../public/assets/hero/hero_lines2.png'

const tajawal = Tajawal({
    variable: '--font-tajawal',
    weight: "400",
    subsets: ["arabic"]
});

function Hero() {
    return (
        <>
            <section className="mb-20" id="hero">
                <div className="pr-6 md:pr-12 text-gray-800 text-center lg:text-right">
                    <div className="mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center h-screen" style={{ backgroundImage: `url(${HeroLines.src})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className={`mt-12 lg:mt-0 md:mt-24 sm:mt-24 xs:mt-24 ${tajawal.className}`}>
                                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 text-system-cyan">إنفيستك</h1>
                                <p className="md:text-2xl md:px-8 sm:px-8 xs:px-8 tracking-tight mb-6 text-system-green">منصة الكترونية تتيح للطلاب عرض مشاريعهم الجامعية للشركات الراغبة في الاستفادة منها أو التعاون مع الطلاب في تطوير المشاريع </p>
                                <a className="inline-flex items-center px-7 py-3 mr-2 bg-system-cyan text-white font-bold rounded-3xl shadow-md hover:bg-system-cyan hover:shadow-lg focus:bg-system-cyan focus:shadow-lg focus:outline-none focus:ring-0 active:bg-system-cyan active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="../../../projects" role="button">
                                    عرض المشاريع
                                    <svg className="mr-2 w-3 h-3 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="hidden lg:block mt-10">
                                {/* <Image 
                                src={ArrowLogo}
                                className="w-full opacity-60"
                                    alt="Lines"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero