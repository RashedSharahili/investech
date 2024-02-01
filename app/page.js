import dynamic from "next/dynamic";
import Image from 'next/image'
import Navbar from "./components/Navbar/Navbar";
// const Navbar = dynamic(() => import("./components/Navbar/Navbar.js"), {
//   ssr: false,
// });
import HomePage from './components/Home/HomePage'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-white">
        <HomePage />
      </main>
    </>
  )
}
