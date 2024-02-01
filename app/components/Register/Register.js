"use client"
import { React, useState, useId, useEffect } from 'react'
import HeroLines from '../../../public/assets/hero/hero_lines.png'
import StudentForm from './StudentForm';
import InvestorForm from './InvestorForm';

function Register() {

    const toBeSelectedId = useId();

    // State for change Account Type ["student", "investor"]
    const [accountType, setAccountType] = useState("student")

    // Handle Account Change
    const handleAccountChange = (event) => {

        setAccountType(event.target.value)
    }

    useEffect(() => {

        document.querySelector(`[type=radio][name=accountType][value=student]`).checked = true;

    }, [toBeSelectedId]);

    return (
        <>
            <section className="">
                <div className="pr-6 md:pr-12 text-gray-800 text-center lg:text-right">
                    <div className="mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center h-screen" style={{ backgroundImage: `url(${HeroLines.src})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className={`mt-12 lg:mt-0 md:mt-24 sm:mt-24 xs:mt-24`}>
                                <h1 className={`text-3xl text-system-cyan mb-10`}>إنشاء حساب </h1>

                                <div class="flex gap-10">
                                    <div class="inline-flex items-center">
                                        <label
                                            class="relative flex cursor-pointer items-center rounded-full p-3"
                                            for="html"
                                            data-ripple-dark="true"
                                        >
                                            <input
                                                id="student"
                                                value="student"
                                                name="accountType"
                                                type="radio"
                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-system-cyan transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                                defaultChecked={accountType === "student"}
                                                onChange={handleAccountChange}
                                            />
                                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-system-cyan opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-3.5 w-3.5"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                >
                                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </div>
                                        </label>
                                        <label
                                            class="mt-px cursor-pointer select-none font-light text-gray-700"
                                            for="html"
                                        >
                                            صاحب مشروع
                                        </label>
                                    </div>
                                    <div class="inline-flex items-center">
                                        <label
                                            class="relative flex cursor-pointer items-center rounded-full p-3"
                                            forHtml="student"
                                            data-ripple-dark="true"
                                        >
                                            <input
                                                id="investor"
                                                value="investor"
                                                name="accountType"
                                                type="radio"
                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-system-cyan transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                                defaultChecked={accountType === "investor"}
                                                onChange={handleAccountChange}
                                            />
                                            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-system-cyan opacity-0 transition-opacity peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-3.5 w-3.5"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                >
                                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </div>
                                        </label>
                                        <label
                                            class="mt-px cursor-pointer select-none font-light text-gray-700"
                                            forHtml="investor"
                                        >
                                            مستثمر
                                        </label>
                                    </div>
                                </div>

                                <div
                                    className="block  w-96 rounded-lg p-6 dark:bg-neutral-700">
                                    {
                                        accountType === "student"
                                            ?
                                            <StudentForm />
                                            :
                                            <InvestorForm />
                                    }

                                    {/* <!--login link--> */}
                                    <p className="mt-6 text-center text-black dark:text-black">
                                        لديك حساب؟
                                        <a
                                            href="/login"
                                            className="text-primary mx-2 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                        >
                                            تسجيل دخول
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={`mt-12 lg:mt-0 md:mt-24 sm:mt-24 xs:mt-24`}>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register