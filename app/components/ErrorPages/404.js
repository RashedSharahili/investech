import React from 'react'
import { Tajawal } from 'next/font/google'
import Image from 'next/image'
import Custom404Img from '../../../public/assets/errorPages/404/404.svg'
import Custom404ImgPlug from '../../../public/assets/errorPages/404/404_plug.svg'

const tajawal = Tajawal({
    variable: '--font-tajawal',
    weight: "400",
    subsets: ["arabic"]
});

function Custom404() {
    return (
        <>
            <section>
                <div className="pr-6 md:pr-12 text-gray-800 text-center">
                    <div className="mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center h-screen" style={{ direction: "rtl" }}>
                            <div className={`mt-12 lg:mt-0 md:mt-24 sm:mt-24 xs:mt-24 ${tajawal.className}`}>
                                <Image
                                    src={Custom404Img}
                                    className="w-full h-72"
                                    alt="404"
                                />
                                <h1 className="lg:text-4xl md:text-2xl md:px-8 sm:px-8 xs:px-8 tracking-tight mb-6 text-system-green font-bold">الصفحة المطلوبة غير موجودة!</h1>
                                <a className="inline-flex items-center px-7 py-3 mr-2 bg-system-cyan text-white font-bold rounded-2xl shadow-md hover:bg-system-cyan hover:shadow-lg focus:bg-system-cyan focus:shadow-lg focus:outline-none focus:ring-0 active:bg-system-cyan active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/" role="button">
                                    العودة للمنصة
                                </a>
                            </div>
                            <div className="hidden lg:block mt-10">
                                <Image
                                    src={Custom404ImgPlug}
                                    className="w-full"
                                    alt="404"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Custom404