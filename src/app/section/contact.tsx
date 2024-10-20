"use client";

import Image from "next/image"
import web1 from "../images/web1.webp"
import web12 from "../images/web12.webp"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import CountUp, { useCountUp } from 'react-countup';

export default function Home() {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
   <>

<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900 pt-10"
    id="projects"
    >

    <motion.div
    className="w-full  2xl:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0 min-[1920px]:mb-20 md:m-40 md:mt-0"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
          <div className="rounded-lg w-full h-full  backdrop-blur-2xl bg-blue-500/30 border-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 flex items-center justify-center h-full">
                <div className="w-full rounded-lg bg-transparent border-0 md:p-20 p-10 h-full text-center">
                  <h5 className="text-5xl underline font-bold tracking-tight text-white dark:text-white">
                  Are You Ready to kickstart your project?
                  </h5>
                  <div className="h-5"></div>
                  <h6 className="font-light text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent md:px-40 text-xl">
                  Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.
                  </h6>
                  <div className="lg:flex inline-flex items-center justify-center mt-10">
                  <motion.a href="mailto:johnermy@gmail.com" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          Contact Me
                          <span className="pl-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
                          </span>
                      </motion.a> 
                  </div>   
                </div>
              </div>
          </div>
          <div className="lg:flex inline-flex items-center justify-center md:mt-20 md:m-4 mr-0 ml-0 mt-4 w-full">
                  <div  className="inline-flex items-center justify-center mt-4 px-5 py-3 text-center text-gray-900 border-0 border-sky-500  hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"> 
                          <p className="font-light">©Copyright <span className="font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-transparent">John Ermy Portfolio</span> All Rights Reserved.</p>
                      </div> 
                      
          </div> 
    </motion.div>
    
</section>
</>
  );
}

