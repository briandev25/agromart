'use client'

import Image from "next/image";

import Link from "next/link";
import { useState,useEffect } from 'react'
import { GlobeAltIcon,ArrowRightIcon,Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon,LockClosedIcon,TrophyIcon,Squares2X2Icon } from '@heroicons/react/24/solid'
import { FaGithub,FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa'
import CountUp from 'react-countup';




export default function Home() {

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [shadow,setShadow] =useState(false)
  const footerLinks = [
    {id:1,head:"Useful Links",links:['Content','How it works','Create','Explore','Terms and services']},
    {id:2,head:"Community",links:['Help Center','Patners','Suggestions','Blog','Newsletters']},
    {id:3,head:"Patner",links:['Our Patner','Become a patner','Accessibility','E-verify','Privacy Notice']}
  ]

const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
}

useEffect(() =>{
      const handleShadow = () =>{
           if(window.scrollY >=90){
               setShadow(true)
           }else{
            setShadow(false)
           }
      }
      window.addEventListener('scroll',handleShadow)
},[])

  return (
   
    <main >
      {/* Navbar */}
      <div className={` w-full px-3 lg:px-10 ${shadow ? `bg-black` : `bg-transparent`} fixed z-[100]`}>
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
        <GlobeAltIcon className=" hover:cursor-pointer h-6 w-6 text-gray-200" />
         <div className=" hidden lg:flex  bg-[#d13639] hover:bg-red-500 rounded-full px-5 py-1 cursor-pointer">
            SIGN IN
         </div>
         <Bars3Icon onClick={() =>setIsMenuOpen(true)} className=" h-6 w-6 text-gray-500 lg:hidden  cursor-pointer" />
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
          <li className="navHover w-full py-4">
             <Link href='/'>work with us</Link>
          </li>
        </ul>
        <div className=" text-white text-center w-full mt-[25vh]  bg-[#d13639] hover:bg-red-500 rounded-full px-5 py-1 cursor-pointer">
            SIGN IN
         </div>
         </div>
         
      </div>
     {/* Hero Sector */}
    <div className="relative w-full h-[100vh]   md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[100vh] flex justify-center items-center">
        <Image
        src='/main.jpg'
        alt="hero section"
        layout="fill"
        objectFit="cover"
         />
         <div className="absolute bg-gradient-to-t from-black to-transparent h-full w-full"></div>
         <div className=" text-white absolute bg-gradient-to-r from-black to-transparent h-full w-full">
          <div className=" max-w-[1240px]  h-full flex flex-col justify-around  items-start m-auto md:text-center">
          
          <div className="w-full md:w-1/2 md:mt-auto flex flex-col items-center justify-center   " >
          <h1 className=" text-3xl md:text-3xl mb-10 lg:mb-5 font-bold tracking-wide text-center">
              Your Ultimate Online Grocery Destination
           </h1>
           <p className=" hidden lg:flex text-gray-300 text-lg tracking-wide mb-12">
            Welcome to agromart,your onestop destination for all your grocery needs,conviniently available at your fongertips.We prioritize freshness,quality and customer satisfaction above all else.
           </p>
           {/* Discover now Button */}
           <div className="flex items-center cursor-pointer hover:shadow-lg hover:shadow-red-400 transition duration-200 bg-[#d13639] w-[240px] md:w-1/2 m-auto px-2 py-2 rounded-2xl ">
               <ArrowRightIcon className=" h-8 w-8 lg:h-10 lg:w-10 p-2 bg-black rounded-full mr-4 "  />
               <div className=" text-white font-bold text-xl lg:text-3xl whitespace-nowrap">
                Discover Now
               </div>
           </div>
          
          </div>
          <div className="  hidden md:flex  mb-6 justify-around text-white w-full  mt-[10vh]">
            <div className="flex  space-x-4 items-center">
                 <p className=" text-xl lg:text-5xl"><CountUp end={3000} duration={2.75} />+</p>
                 <p className=" uppercase  bg-repeating-gradient whitespace-nowrap">users active</p>
            </div>
            <div className="flex space-x-4 items-center">
                 <p className=" text-xl lg:text-5xl"><CountUp end={130} duration={2.75} />+</p>
                 <p className=" uppercase  whitespace-nowrap">trusted by company</p>
            </div>
            <div className="flex space-x-4 items-center">
                 <p className=" text-xl lg:text-5xl">$<CountUp end={250} duration={2.75} />M</p>
                 <p className=" uppercase   whitespace-nowrap">transactions</p>
            </div>
           </div>
          </div>
          
         </div>
    </div>
     {/* Whats new section */}
     <div className=" w-full ">
        <div className=" max-w-[1240px] mx-auto my-[10vh] flex flex-col space-y-10  h-full">
          <h1 className=" text-4xl text-center text-gray-300 font-semibold">What&apos;s new? Our latest updates</h1>
          {/* 1 */}
          <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row  items-center h-[100vh] sm:h-[50vh] mx-5">
               <div className=" w-full sm:w-[60%]  h-full relative ">
                  <Image src='/egg.jpg' alt="/discount.png" layout='fill' objectFit='cover' className=" rounded-lg " />
               </div> 
               <div className=" w-full sm:w-[40%]  mx-5 ">
                  <h1 className=" text-2xl  font-bold mb-2 text-green-700">Get ready for Easter!</h1>
                  <p className=" w-[90%] text-gray-400" >We are locking prices for 3 weeks on a selection of your favourite Easter Essentials throughout our stores. Prices are locked from Thursday, March 14th to Wednesday, April 3rd.</p>
               </div>
          </div>

          {/* 2 */}
          <div className=" flex flex-col space-y-5 sm:space-y-0 sm:flex-row-reverse items-center h-[100vh] sm:h-[50vh] mx-5">
               <div className=" w-full sm:w-[60%] h-full relative ">
                  <Image src='/output.jpg' alt="/discount.png" layout='fill' objectFit='cover' className=" rounded-lg" />
               </div> 
               <div className=" w-full sm:w-[40%]  mx-5 ">
                  <h1 className=" text-2xl  font-bold mb-2 text-green-700">Celebrating Women&apos;s Day!</h1>
                  <p className=" w-[90%] text-gray-400" >At agromart, we honor and celebrate the incredible women who make a difference every day.Together, let&apos;s celebrate the achievements, strength, and resilience of women everywhere!</p>
               </div>
          </div>

          {/* 3 */}
          <div className=" flex flex-col space-y-5 sm:space-y-0 sm:flex-row  items-center h-[100vh] sm:h-[50vh] mx-5">
               <div className=" w-full sm:w-[60%] h-full relative ">
                  <Image src='/mega.jpg' alt="/discount.png" layout='fill' objectFit='cover' className=" rounded-lg" />
               </div> 
               <div className=" w-full sm:w-[40%]  mx-5 ">
                  <h1 className=" text-2xl  font-bold mb-2 text-green-700">Get 20% discount today!</h1>
                  <p className=" w-[90%] text-gray-400" >As a token of our appreciation, we&apos;re offering a special discount: <strong>Get 15% off</strong> on all products!</p>
               </div>
          </div>
        </div>
     </div>
      {/* Benefits section */}
        <div className=" w-full mb-7  ">
               <div className=" max-w-[1240px] mx-5  md:mx-[10vh] mt-[10vh] flex flex-col lg:flex-row  h-full xl:mx-auto">
                  <div className=" flex-1">
                     <div className=" flex flex-col mb-[10vh] lg:mb-0 items-center lg:items-start">
                     <h1 className=" text-white text-4xl text-ellipsis text-center lg:text-start ">Discover the top benefits of shopping with us</h1>
                     <div className=" text-xl w-[75%] text-gray-400 mt-10">Streamline your grocery shopping with agromart. From fresh produce to pantry staples, enjoy convenience, quality, and savings delivered to your doorstep. Shop now and experience the difference!</div>
                     <button className=" cursor-pointer bg-gradient-to-tr from-orange-600 to-orange-400 py-4 inline rounded-lg mt-[10vh] w-[170px]">Get Started</button>
                     </div>
                  </div>
                  <div className="flex-1">
                     <div className=" flex flex-col space-y-5">
                        {/* 1 */}
                         <div className="flex hover:bg-gray-900   p-3 rounded-3xl items-center space-x-4">
                           {/* logo */}
                           <div className=" p-3 bg-gray-900 rounded-full flex items-center justify-center" >
                           <LockClosedIcon className=" h-8 w-8 text-orange-500" />
                           </div>
                           {/* Title and Description */}
                           <div className=" flex flex-col space-y-2">
                                 <h1 className=" text-white text-xl">100% Secured</h1>
                                 <p className=" text-gray-400">We take proactive steps to make sure your information and transactions are secure.</p>
                           </div>
                         </div>
                         {/* 2 */}
                         <div className="flex hover:bg-gray-900   p-3 rounded-3xl items-center space-x-4">
                           {/* logo */}
                           <div className=" p-3 bg-gray-900 rounded-full flex items-center justify-center" >
                           <BanknotesIcon className=" h-8 w-8 text-orange-500" />
                           </div>
                           {/* Title and Description */}
                           <div className=" flex flex-col space-y-2">
                                 <h1 className=" text-white text-xl">Competitive Prices</h1>
                                 <p className=" text-gray-400">Enjoy great savings without compromising on quality.We offer competitive prices on all our products,helping you stretch your budhet further.</p>
                           </div>
                         </div>
                         {/* 3 */}
                         <div className="flex hover:bg-gray-900   p-3 rounded-3xl items-center space-x-4">
                           {/* logo */}
                           <div className=" p-3 bg-gray-900 rounded-full flex items-center justify-center" >
                           <TrophyIcon className=" h-8 w-8 text-orange-500" />
                           </div>
                           {/* Title and Description */}
                           <div className=" flex flex-col space-y-2">
                                 <h1 className=" text-white text-xl">Freshness guaranteed</h1>
                                 <p className=" text-gray-400">We prioritize quality and freshness in every product we offer.From farm-fresh products to pantry essentials,we ensure you only get the best.</p>
                           </div>
                         </div>
                         {/* 4 */}
                         <div className="flex hover:bg-gray-900   p-3 rounded-3xl items-center space-x-4">
                           {/* logo */}
                           <div className=" p-3 bg-gray-900 rounded-full flex items-center justify-center" >
                           <Squares2X2Icon className=" h-8 w-8 text-orange-500" />
                           </div>
                           {/* Title and Description */}
                           <div className=" flex flex-col space-y-2">
                                 <h1 className=" text-white text-xl">Wide selection</h1>
                                 <p className=" text-gray-400">Explore our vast selection of groceries,from everyday staples to gourmet delights.Whatever you need,we&apos;ve got you covered.</p>
                           </div>
                         </div>
                     </div>
                  </div>
               </div>
        </div>

        {/* We are hiring */}
        <div className="flex relative w-full sm:h-[80vh] ">
        <Image
        src='/greens.jpg'
        alt="hero section"
        layout="fill"
        objectFit="cover"
         />
            <div className="  h-full  lg:flex-1 w-full normal-shape lg:custom-shape bg-[#c9d1d9] pb-[10vh] sm:pb-0   ">
                 <div className=" mx-20 items-center  flex flex-col space-y-10 text-center  mt-[10vh]">
                  <h1 className=" text-4xl text-[#1A1E1F] font-semibold text-ellipsis">We&apos;re hiring!</h1>
                  <p className=" text-xl text-gray-600">Team up with agrimart to forge your path and craft unforgetable experience in the field of agriculture</p>
                  <div className=" flex space-x-6">
                      <div className="  flex flex-1 flex-col px-10 py-5 rounded-lg  bg-gray-400">
                        <p className="text-4xl text-[#1A1E1F] font-semibold">19</p>
                        <p className="  whitespace-nowrap"> Open positions</p>
                      </div>
                      <div className=" flex flex-1 flex-col justify-around bg-gray-400 px-10 py-5 rounded-lg ">
                        <p className="text-4xl text-[#1A1E1F] font-semibold">24</p>
                        <p>Offices</p>
                      </div>
                  </div>
                  <div className=" cursor-pointer bg-gradient-to-tr from-orange-600 to-orange-400 py-4 inline rounded-lg mt-[10vh]  w-[170px]">Explore Careers</div>
                  </div> 
            </div>
            <div className=" h-full w-full  flex-1   ">

            </div>
        </div>

        {/* Get started Section */}
        <div className="w-full overflow-x-hidden ">
           <div className="py-[10vh]  max-w-[1240px]  h-full mx-auto">
              <div className="  mx-5 bg-gradient-to-tr from-[#09203f] py-10 lg:py-0 flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between  items-center lg:px-20 to-[#537895] lg:h-[40vh] rounded-3xl">
                 <div className=" flex  flex-col items-center space-y-3 lg:items-start">
                      <h1 className=" text-white text-2xl sm:text-4xl text-center font-semibold">Let&apos;s try our service now!</h1>
                      <p className=" text-gray-400  w-full sm:w-[80%] lg:w-[70%] ">Your ultimate destination for convenient and hassle-free online grocery shopping! At AgriMart, we offer a vast selection of fresh produce, pantry essentials, household items, and specialty goods, all delivered straight to your doorstep. </p>
                 </div>
                 <div className=" cursor-pointer bg-gradient-to-tr from-orange-600 whitespace-nowrap to-orange-400 w-[170px] py-3 px-8 inline rounded-lg text-center ">Get Started</div>
              </div>
           </div>
        </div>

        {/* Footer */}
        <div className=" bg-[#1D2123]  w-full ">
          <div className=" pt-[10vh]   max-w-[1240px]  h-full mx-auto">
              <div className="flex flex-col lg:flex-row items-center text-center mx-6 space-y-6">
              <div className=" w-full flex flex-col items-center  lg:w-1/2 ">
                 <div className="flex  items-center font-extrabold"> 
                   <Image
                    src='/est2.png'
                    alt="hero section"
                    width={100}
                      height={100}
                    />
                    <p className=" text-3xl">AGROMART</p>
                </div>
                <p className="text-gray-400">Say goodbye to long lines and heavy bags – shop smarter with us today!</p>
              </div>
              <div className=" ml-10 w-full lg:w-1/2">
                <div className=" grid grid-cols-2 sm:grid-cols-3">
                   {footerLinks.map( item =>(
                      <div key={item.id} className=" flex flex-col">
                          <h1 className=" text-white mb-5 cursor-pointer">{item.head}</h1>
                          <ul>
                           {item.links.map((tag,index) =>(
                            <li className=" my-3 text-gray-600 hover:text-gray-400 cursor-pointer" key={index}>{tag}</li>
                           ))}
                          </ul>
                          
                      </div>
                   ))}
                </div>
              </div>
              </div>
           <hr className=" mt-12"></hr> 
           <div className="flex lg:flex-row flex-col items-center space-y-5 lg:space-y-0 lg:mx-8 lg:justify-between py-10">
              <p className=" text-gray-400">Copyright ©️ 2024 briankips34 Inc. All Rights Reserved.</p>
              <div className=" flex space-x-4">
                 <FaGithub className=" text-white text-2xl cursor-pointer" />
                 <FaFacebook className=" text-white text-2xl cursor-pointer"  />
                 <FaTwitter className=" text-white text-2xl cursor-pointer"  />
                 <FaGithub className=" text-white text-2xl cursor-pointer"  />
              </div>
            </div> 
          </div>
          
        </div>
     
    </main>
  );
}

 