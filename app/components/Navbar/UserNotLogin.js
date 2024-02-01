"use client"

import Link from 'next/link'
import React from 'react'

function UserNotLogin() {
    return (
        <>
            <div className="relative" data-te-dropdown-ref>
            <Link href="/Register">
                <button
                    type="button"
                    className="inline-block rounded-full border-2 border-system-green px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-system-green transition duration-150 ease-in-out hover:border-system-cyan-600 hover:bg-zinc-500  hover:bg-opacity-10 hover:text-system-cyan-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-slate-50  dark:hover:bg-opacity-10"
                    data-te-ripple-init>
                    إنشاء حساب
                </button>
                </Link>
                <Link href="/login">
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-slate-50  hover:text-zinc-500 focus:text-system-cyan-600 focus:outline-none focus:ring-0 active:text-primary-700">
                    تسجيل دخول
                </button>
                </Link>
            </div>
        </>
    )
}

export default UserNotLogin