'use client'
import { useEffect,useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";


const ScrollToTopButton = () =>{

    const [isVisible,setIsVisible] = useState(false);

    useEffect(() =>{
        const toggleVisibility = () =>{
            window.scrollY > 500 ? setIsVisible(true) :setIsVisible(false)
        }
        window.addEventListener('scroll',toggleVisibility);

        return () =>{
            window.addEventListener('scroll',toggleVisibility); 
        }
    },[])

    const scrollToTop = () =>{
        isVisible && window,scrollTo({top:0,behavior:'smooth'})
    }

    return(
        <div onClick={scrollToTop} className={`fixed bottom-4 right-4 cursor-pointer rounded-full flex items-center justify-center p-3 bg-yellow-400  ${isVisible ? " opacity-100" : "opacity-0"}` }>
            <ArrowUpIcon className="text-gray-600 h-4 w-4" />
        </div>
    )
};

export default ScrollToTopButton;