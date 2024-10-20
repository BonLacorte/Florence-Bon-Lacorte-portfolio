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
    className="w-full 2xl:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0 min-[1920px]:mb-40 md:m-40 md:mt-0"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      <div className="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-3">
        <div className="mr-auto place-self-center lg:col-span-2 flex items-center justify-center">
            <p className="max-w-2xl text-white text-4xl dark:text-gray-400 font-extrabold ">Check out some of my latest projects with creative ideas.</p>           
        </div>
        <div className="hidden lg:mt-0 lg:flex inline-flex items-center justify-end">
        <motion.a  href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
                Download CV
                
            </motion.a> 
        </div>                
    </div>
          <div className="rounded-lg w-full h-full md:h-96  backdrop-blur-2xl bg-blue-500/30 border-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex items-center justify-center h-full">
                <div className="w-full rounded-lg bg-transparent border-0 p-10 h-full">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Website Development
                  </h5>
                  <div className="h-5"></div>
                  <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    Construction Web Design
                  </h5>
                  <p className="font-normal text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent">
                    Built with Wordpress Elementor Theme. Web development and Web design with contact forms.
                  </p>
                  <div className="lg:flex inline-flex items-center mt-10">
                  <motion.a href="https://www.behance.net/gallery/194455311/Saudi-Mshati-Construction-Web-Design" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          See Project
                          <span className="pl-3">
                           
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                           
                          </span>

                          
                      </motion.a> 
                  </div>   
                </div>
                <div>
                <div className="md:w-full rounded-lg bg-transparent border-0 p-10">
                  <motion.div
                   className="relative absolute"
                  initial={{y : 100 }}
                  whileInView={{ y : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  >
                        <Image className="z-1 md:rotate-[-20deg] absolute min-[1920px]:right-72 top-[-5rem] 2xl:right-72 md:right-15  2xl:top-[-5rem] 2xl:w-72 lg:w-60  sm:w-40"  src={web1} width={300} height={300} alt="John Ermy" />
                  </motion.div>
                </div>
                <div className="md:w-full rounded-lg bg-transparent border-0 p-10">
                  <motion.div
                   className="relative absolute"
                   initial={{y : -100 }}
                  whileInView={{ y : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  >
                        <Image className="z-0  md:rotate-[-20deg] absolute  md:right-2 md:top-[-20rem] min-[1920px]:right-0 2xl:right-0 2xl:w-72 lg:w-60 sm:w-40"  src={web12} width={300} height={300} alt="John Ermy" />
                  </motion.div>
                </div>
                </div>
              </div>
          </div>

          {/*  <-------- Spacer ---------- > */}
          <div className="h-5"></div>
          {/*  <-------- Spacer ---------- > */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex items-center justify-center ">
            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 h-[34rem] overflow-hidden">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Windows App Development
                  </h5>
                  <div className="h-3"></div>
                  <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                    Management Information and Billing System
                  </h5>
                  <p className="font-normal text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent">
                    Built with Microsoft Visual Studio C# and SQL Server for lan database. Features of printing billing, reports, penalty calculations, member's information and ETC.
                  </p>
                  <div className="lg:flex inline-flex items-center mt-4">
                  <motion.a href="https://www.behance.net/gallery/188482571/TBWSC-Billing-Management-System" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          See Project
                          <span className="pl-3">
                           
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                           
                          </span>

                          
                      </motion.a> 
                  </div> 
                  <div className="h-60">
                        <motion.div
                        className="relative w-full h-full"
                        initial={{y : 100 }}
                        whileInView={{ y : 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        >
                              <Image className="z-1 absolute min-[1920px]:right-0 min-[1920px]:bottom-[-8rem] 2xl:right-0 left-0 md:bottom-[-5rem]"  src={require('../images/tbwscbilling.webp')} width={700} height={700} alt="John Ermy" />
                        </motion.div>
                  </div>
            </Card>
            

            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 md:h-[34rem] h-fit overflow-hidden">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Branding
                  </h5>
                  <div className="h-3"></div>
                  <p className="font-normal text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent">
                    Mockups, graphic design, booklet, magazine, banner, lanyard, calling card, flyers, t-shirt design, identification mockup and ETC. Made with Adobe Photoshop and Adobe Illustrator. 
                  </p>
                  <div className="lg:flex inline-flex mt-4">
                  <motion.a href="https://www.behance.net/moodboard/212890629/Branding" target="_blank" className="inline-flex px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          See Project
                          <span className="pl-3">
                           
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                           
                          </span>

                          
                      </motion.a> 
                  </div> 
                  <div className="h-32 md:h-60">
                  <motion.div
                        className="relative w-full h-full"
                        initial={{y : 100 }}
                        whileInView={{ y : 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        >
                             <Image className="z-1 min-[1920px]:right-0 min-[1920px]:bottom-[-8rem] 2xl:right-0 left-0 md:bottom-[-5rem]"  src={require('../images/branding.webp')} width={800} height={800} alt="John Ermy" />
                  </motion.div>
                  </div>
            </Card>
          </div>

          {/*  <-------- Spacer ---------- > */}
          <div className="h-5"></div>
          {/*  <-------- Spacer ---------- > */}

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 flex items-center justify-center">
            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 overflow-hidden">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Social Media Post
                  </h5>
                  <div className="h-3"></div>
                  <p className="font-normal text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent">
                    Facebook, Instagram, Youtube, Google email, Linked-in and ETC. Made with Adobe Photoshop and Adobe Illustrator. 
                  </p>
                  <div className="lg:flex inline-flex items-center mt-4">
                  <motion.a href="https://www.behance.net/moodboard/212890819/Social-Media-Post" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          See Project
                          <span className="pl-3">
                           
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                           
                          </span>

                          
                      </motion.a> 
                  </div> 
                  <div className="h-60">
                  <motion.div
                        className="relative w-full h-full"
                        initial={{y : 100 }}
                        whileInView={{ y : 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        >
                             <Image className="z-1 min-[1920px]:right-0 min-[1920px]:bottom-[-8rem] 2xl:right-0 left-0 md:bottom-[-5rem]"  src={require('../images/socialmediapost.webp')} width={700} height={700} alt="John Ermy" />
                  </motion.div>
                  </div>
            </Card>

            <Card className="w-full backdrop-blur-2xl bg-blue-500/30 border-0 overflow-hidden">
                  <h5 className="text-2xl underline font-bold tracking-tight text-white dark:text-white">
                    Others
                  </h5>
                  <div className="h-3"></div>
                  <p className="font-normal text-white dark:text-gray-400 bg-gradient-to-b from-white bg-clip-text text-transparent">
                    Video Editing, Reels, Same day edit, wedding monogram, photography, tarpaulin design and ETC. 
                  </p>
                  <div className="lg:flex inline-flex items-center mt-4">
                  <motion.a href="https://www.behance.net/johnermy" target="_blank" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                      
                          See Project
                          <span className="pl-3">
                           
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                           
                          </span>

                          
                      </motion.a> 
                      
                  </div> 

                  <div className="h-32 md:h-60">
                  <motion.div
                        className="relative w-full h-full"
                        initial={{y : 100 }}
                        whileInView={{ y : 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        >
                             <video width="750" height="500" loop muted autoPlay>
                                  <source src='/tbwsc.mp4' type="video/mp4"/>
                            </video>
                  </motion.div>
                  </div>
            </Card>
          </div>
          <div className="lg:flex inline-flex items-center justify-center md:mt-4 md:m-4 mr-0 ml-0 mt-10 mb-10 w-full">
                  <motion.a href="https://www.behance.net/johnermy" target="_blank" className="inline-flex items-center justify-center mt-4 px-5 py-3 font-medium text-center text-gray-900 border-0 border-sky-500  hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 text-xl underline"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      > 
                      
                          See All Projects
                          
                      </motion.a> 
                      
            </div> 
    </motion.div>

</section>

<section className=" min-[1920px]:h-fit 2xl:h-fit flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900"
    >
    <motion.div
    className="w-full 2xl:m-28 2xl:mt-0 min-[1920px]:m-60 min-[1920px]:mt-0 min-[1920px]:mb-40 md:m-28 md:mb-0 md:mt-0 mt-10 mb-10"
    initial={{ y:100, opacity: 0 }}
    whileInView={{ y:0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      
      <div className="text-center text-white text-4xl dark:text-gray-400 font-extrabold pb-12 flex items-center justify-center">
        <div className="pr-4 invert-0 brightness-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M8.84 10.835h-1.965v-1.859h1.783c1.878 0 1.646 1.859.182 1.859zm5.789 1.058h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.9.396h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm15.271-.289c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.357-.733c1.668-.853 1.607-3.981-1.587-4.028h-4.056v8.73h3.771c3.958 0 3.891-3.967 1.872-4.702zm3.357-3.166h4v-.875h-4v.875zm4.943 3.693c-.545-3.505-6.053-3.711-6.053.872 0 4.526 5.18 3.818 5.949 1.56h-1.848c-.645.748-2.508.531-2.404-1.184h4.41c.009-.555-.009-.953-.054-1.248z"/></svg>
        </div>
              <h2>Behance Stats</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full md:mb-3.5">
                            <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            >
                                  <CountUp className="text-6xl font-extrabold text-white" end={6420} enableScrollSpy />
                                  <h2 className="text-2xl font-bold pt-10 text-white">Project Views</h2>
                              </motion.div>

                              <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            >
                                  <CountUp className="text-6xl font-extrabold text-white" end={112} enableScrollSpy />
                                  <h2 className="text-2xl font-bold pt-10 text-white">Appreciations</h2>
                              </motion.div>

                              <motion.div
                            className="text-center"
                            initial={{opacity : 0, y : 100 }}
                            whileInView={{ opacity : 1 , y : 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            >
                                  <CountUp className="text-6xl font-extrabold text-white" end={35} enableScrollSpy />
                                  <h2 className="text-2xl font-bold pt-10 text-white">Followers</h2>
                              </motion.div>
    </div>
    </motion.div>
</section>
</>
  );
}

