import React from 'react'

function Breadcrumbs() {
  return (
    <>
      <ol className="list-reset flex w-full rounded-md items-center text-xl">
        <li>
          <a
            href="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >الصفحة الرئيسية</a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400"> <svg className="h-8 w-8 text-blue-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="15 6 9 12 15 18" /></svg> </span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">المشاريع</li>
      </ol>
    </>
  )
}

export default Breadcrumbs