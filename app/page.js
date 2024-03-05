'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import { GlobeAltIcon,ArrowRightIcon,Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'





export default function Home() {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
}
  return (
    <main >
      {/* Navbar */}
      <div className=" w-full px-3 lg:px-10 bg-transparent fixed z-[100]">
     <div className=" flex  justify-between items-center  " >
      {/* Items on the right */}
     <div className=" flex items-center space-x-10">
       {/* Logo */}
       <div className=" hover:cursor-pointer" >
        <Image src='/est2.png'  alt="est.png" width={70} height={70} className=" p-2 rounded-[50%]"/>
      </div>
      {/* NavLinks */}
      <div className=" hidden lg:flex">
        <ul className="flex items-center space-x-4 text-white uppercase text-sm">
          <li className=" navHover ">
             <Link href='/'>who we are</Link>
          </li><li className="navHover">
             <Link href='/'>what we do</Link>
          </li>
          <li className="navHover">
             <Link href='/'>work with us</Link>
          </li>
        </ul>
      </div>
     </div>
      {/* Others on left */}
      <div className=" flex items-center space-x-9 lg:space-x-5">
        <GlobeAltIcon className=" hover:cursor-pointer h-6 w-6" />
         <div className=" hidden lg:flex  bg-[#d13639] hover:bg-red-500 rounded-full px-5 py-1 cursor-pointer">
            SIGN IN
         </div>
         <Bars3Icon onClick={() =>setIsMenuOpen(true)} className=" h-6 w-6 lg:hidden  cursor-pointer" />
      </div>
      
     </div>
      </div>
      {/* Hambuger Menu */}
      <div className={` bg-[#1D2123]  z-[101] fixed w-3/4 md:w-1/2  ${ isMenuOpen ? ` opacity-100` :`opacity-0`}  h-[100vh]`}>
         <div className=" flex flex-col m-10">
             {/* Logo and close icon */}
             <div className=" flex justify-between items-center">
                <Image src='/est2.png' alt='est2.png'  width={70} height={70} className=" p-2 rounded-[50%]" />
                <XMarkIcon className=" h-10 w-10 p-2 bg-gray-500 rounded-full" onClick={() => toggleMenu(false)} />
             </div>
             {/* NavLinks */}
             <ul className="flex flex-col items-start space-y-4 text-white uppercase text-sm">
          <li className=" navHover w-full py-4  ">
             <Link href='/'>who we are</Link>
          </li><li className="navHover w-full py-4 ">
             <Link href='/'>what we do</Link>
          </li>
          <li className="navHover w-full py-4 ">
             <Link href='/'>work with us</Link>
          </li>
        </ul>
        <div className=" text-white text-center w-full mt-[25vh]  bg-[#d13639] hover:bg-red-500 rounded-full px-5 py-1 cursor-pointer">
            SIGN IN
         </div>
         </div>
         
      </div>
     {/* Hero Sector */}
    <div className="relative w-full h-[100vh]  md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[100vh] flex justify-center items-center">
        <Image
        src='/greens.jpg'
        alt="hero section"
        layout="fill"
        objectFit="cover"
         />
         <div className=" text-white absolute bg-gradient-to-r from-black to-transparent h-full w-full">
          <div className=" max-w-[1240px]  h-full flex justify-center lg:justify-start items-center mt-[10vh] m-auto md:text-center">
          <div className=" w-1/2  " >
          <h1 className=" text-3xl md:text-3xl mb-10 lg:mb-5 font-bold tracking-wide">
              Your Ultimate Online Grocery Destination
           </h1>
           <p className=" hidden lg:flex text-gray-300 text-lg tracking-wide mb-12">
            Welcome to agromart,your onestop destination for all your grocery needs,conviniently available at your fongertips.We prioritize freshness,quality and customer satisfaction above all else.
           </p>
           <div className="flex items-center cursor-pointer hover:shadow-lg hover:shadow-red-400 transition duration-200 bg-[#d13639] w-full md:w-1/2 m-auto px-2 py-2 rounded-2xl ">
               <ArrowRightIcon className=" h-8 w-8 lg:h-10 lg:w-10 p-2 bg-black rounded-full mr-4 "  />
               <div className=" text-white font-bold text-xl lg:text-3xl">
                Discover Now
               </div>
           </div>
          </div>
          </div>
         </div>
    </div>
      

     
    </main>
  );
}
