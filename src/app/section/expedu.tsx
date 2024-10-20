"use client";

import React, {useState} from "react"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";
import "../globals.css";

export default function Home() {
    const [isActive, setActive] = React.useState(false);
  return (
   <>
<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
      

    <motion.div
    className="w-full 2xl:m-28  2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0 min-[1920px]:mb-0 md:m-40 md:mb-0 md:mt-0"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
        <div className="relative">
            <div className={`toggle ${isActive ? "relative md:h-fit overflow-hidden grid md:grid-cols-2 grid-cols-1 gap-4 flex relative" :  "relative md:h-[47rem] h-fit overflow-hidden grid md:grid-cols-2 grid-cols-1 gap-4 flex relative" }`}>
                <div className="relative">
                    <div className="flex items-center m-5">
                        <div className="pr-2 text-2xl">
                            💻
                        </div>
                    <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                        WORK EXPERIENCE
                    </h2>
                    </div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2023 - 2024
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Wordpress Web Developer
                        </h5>
                        <p className="max-w-2xl 2xl:text-base text-white">Managing and Developing Website Design for Saudi Arabia Clients. Building websites with the use of Wordpress CMS and Elementor Theme. It includes graphic designs and SEO.</p>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2023 - 2024
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Freelance C# Developer
                        </h5>
                        <p className="max-w-2xl 2xl:text-base text-white">Management Information and Billing System for a water service cooperative in Tanauan, Batangas with over 1000+ members.</p>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2021 - 2022
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Freelance Wordpress Web Developer
                        </h5>
                        <p className="max-w-2xl 2xl:text-base text-white">Managing and Developing Website Design for Australian Clients (Rhinomedia). Building websites with the use of Wordpress CMS and Elementor Theme. It includes graphic designs and SEO.</p>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2019 - 2021
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Freelance Wordpress Web Developer
                        </h5>
                        <p className="max-w-2xl 2xl:text-base text-white">Managing and Developing Website Design for Australian Clients (Rhinomedia). Building websites with the use of Wordpress CMS and Impreza Theme. It includes graphic designs and SEO.</p>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2018 - 2019
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Senior Wordpress Web Developer
                        </h5>
                        <p className="max-w-2xl 2xl:text-base text-white">Managing and Developing Website Design for Australian Clients (Elazar Creative Publishing Inc.). Building websites with the use of Wordpress CMS and Impreza Theme. It includes graphic designs and SEO.</p>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2017 - 2018
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Wordpress Web Developer
                        </h5>
                        <p className="max-w-2xl 2xl:text-base text-white">Managing and Developing Website Design for Australian Clients (Elazar Creative Publishing Inc.). Building websites with the use of Wordpress CMS and Impreza Theme. It includes graphic designs and SEO.</p>
                    </Card>
                </div>

                <div className="relative">
                    <div className="flex items-center m-5">
                        <div className="pr-2 text-2xl">
                            📝
                        </div>
                    <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                        EDUCATION BACKGROUND
                    </h2>
                    </div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2012 - 2016
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            College Level
                        </h5>
                        <h3 className="text-xl text-white">Cavite State University</h3>
                        <h3 className="text-l text-white">Indang, Cavite, Philippines</h3>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2020 - 2021
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            Keyword Research Exam (SEO Certificate)
                        </h5>
                        <h3 className="text-xl text-white">Semrush Certificate</h3>
                        <h3 className="text-l text-white">semrush.com</h3>
                    </Card>
                    <div className="h-5"></div>
                    <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-52 h-fit">
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                            2012 - 2017
                        </h2>
                        <h5 className="text-2xl font-extrabold text-white">
                            National Certificate - TESDA (NC II)
                        </h5>
                        <h3 className="text-xl text-white">Computer System Servicing</h3>
                        <h3 className="text-l text-white">Bacoor, Cavite, Philippines</h3>
                    </Card>
                    
                </div>
            </div>
          </div>
    </motion.div>
</section>
<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >

    <div className="lg:flex inline-flex items-center justify-center m-4 hidden md:block">
                  <motion.a onClick={() => setActive(!isActive)} className="inline-flex items-center justify-center mt-4 px-5 py-3 font-medium text-center text-gray-900 border-0 border-sky-500  hover:text-white  bg-transparent text-white text-xl underline"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      > 
                      
                      {`${isActive ? "See Less" :  "See All Work Experience" }`}
                          
                      </motion.a> 
    </div>   
</section>
</>
  );
}

