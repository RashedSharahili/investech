"use client"
import Link from 'next/link';
import { React, useState } from 'react'
import UserIcon from '../../../public/assets/navbar/user_icon/user_icon.png'

function UserLogin() {

    return (
        <>
            <div className="relative" data-te-dropdown-ref>
                <a
                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false">
                    <label className="mx-2 cursor-pointer">Rana Alharbi</label>
                    <img
                        src={UserIcon.src}
                        className="rounded-full border-2"
                        style={{ height: "35px", width: "35px" }}
                        alt=""
                        loading="lazy" />
                </a>
                <ul
                    className="absolute right-auto left-0 z-[1000] float-right m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-right text-base shadow-lg dark:bg-gray-900 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton2"
                    data-te-dropdown-menu-ref>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-system-green hover:text-system-cyan active:text-system-cyan active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-system-green dark:hover:text-white/30"
                            href="#"
                            data-te-dropdown-item-ref
                        >
                            الملف الشخصي
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-system-green hover:text-system-cyan active:text-system-cyan active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-system-green dark:hover:text-white/30"
                            href="#"
                            data-te-dropdown-item-ref
                        >
                            مشاريعي
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-system-green hover:text-system-cyan active:text-system-cyan active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-system-green dark:hover:text-white/30"
                            href="#"
                            data-te-dropdown-item-ref
                        >
                            التنبيهات
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-red-500 hover:text-red-600 active:text-red-700 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-red-500 dark:hover:text-white/30"
                            href="#"
                            data-te-dropdown-item-ref
                        >
                            تسجيل خروج
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default UserLogin