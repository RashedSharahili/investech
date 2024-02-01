"use client"
import { React, useState, useEffect, useReducer } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Logo from '../../../public/assets/navbar/new_logo/investech2.png'
import UserLogin from './UserLogin'
import UserNotLogin from './UserNotLogin'

const Navbar = () => {

  // const [user, setUser] = useState()

  const [loggedin, setLoggedin] = useState(false);

  const [showButton, setShowButton] = useState(false);

  const currentPage = usePathname();

  useEffect(() => {

    const init = async () => {
      const { Collapse, Dropdown, Ripple, initTE } = await import("tw-elements");
      initTE({ Collapse, Dropdown, Ripple });

      // setUser(localStorage.getItem("Username"))

    };
    init();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  const scrollToTop = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  const scrollToHero = () => {

    if (currentPage == "/") {

      const hero = document.getElementById('hero');

      if (hero) {

        window.scrollTo({ top: 0, behavior: 'smooth' });

      }

    } else {

      window.location.href = "/"

    }

  }
  const scrollToServices = () => {

    if (currentPage == "/") {

      const services = document.getElementById('services');

      if (services) {

        services.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

    } else {

      window.location.href = "/"
    }

  }
  const scrollToContactUs = () => {

    if (currentPage == "/") {

      const contactus = document.getElementById('contactus');

      if (contactus) {

        contactus.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

    } else {

      window.location.href = "/"

    }

  }

  return (
    <>
      <nav
        className="sticky z-10 flex-no-wrap flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref style={{ top: 0 }}>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent12"
            aria-controls="navbarSupportedContent12"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </button>

          <div>
            <a
              className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="/">
              <img
                src={Logo.src}
                alt="إنفيستك"
                loading="lazy"
                className="hidden sm:block sm:w-36 sm:h-10 lg:w-50 lg:h-15"
              />
            </a>
          </div>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent12"
            data-te-collapse-item>
            <ul
              className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row items-center"
              data-te-navbar-nav-ref>
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref>
                <button
                  className="text-neutral-700 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  onClick={scrollToHero}
                  data-te-nav-link-ref
                >الصفحة الرئيسية</button
                >
              </li>
              <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref>
                <button
                  className="p-0 text-neutral-700 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  onClick={scrollToServices}
                  data-te-nav-link-ref
                >خدماتنا</button
                >
              </li>
              <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-item-ref>
                <a
                  className="p-0 text-neutral-700 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="../projects"
                  data-te-nav-link-ref
                >المشاريع</a
                >
              </li>
              <li
                className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                data-te-nav-link-ref>
                <button
                  className="text-neutral-700 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  onClick={scrollToContactUs}
                >تواصل معنا</button
                >
              </li>
            </ul>
          </div>
          <div className="relative flex items-center">
            {/* <a
            className="mr-4 text-secondary-500 transition duration-200 hover:text-secondary-400 hover:ease-in-out focus:text-secondary-400 disabled:text-black/30 motion-reduce:transition-none"
            href="#">
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </a> */}
            {
            loggedin ? 
            <UserLogin />
            :
            <UserNotLogin />
            }
          </div>
        </div>
      </nav>
      <button
        onClick={scrollToTop}
        className={`${showButton ? 'visible' : 'invisible'
          } fixed bottom-4 right-4 bg-system-cyan text-white px-4 py-2 rounded hover:bg-system-cyan`}
      >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"></path>
        </svg>
      </button>
    </>
  )

}

export default Navbar