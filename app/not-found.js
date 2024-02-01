import React from 'react'
import Custom404 from './components/ErrorPages/404'

function NotFound() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-white">
        <Custom404 />
      </main>
    </>
  )
}

export default NotFound