"use client";

import Image from "next/image"
import memoji from "../images/memoji.png"
import { Card } from "flowbite-react";
import { motion  } from "framer-motion";



export default function Home() {


  return (
   <>
    <section className="h-screen 2xl:h-screen flex items-center justify-center bg-gradient-to-r
    from-blue-800
    via-blue-700
    to-blue-600
    background-animate dark:bg-gray-900" >
      <div className="relative">
       <motion.div
       
      initial={{ y:100, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      >
      <Card className="max-w-full backdrop-blur-sm bg-blue-500/30 border-0">
       <div className="grid max-w-screen-xl px-4 py-5 mx-auto lg:gap-8 xl:gap-0 2xl:p-8 lg:grid-cols-7">
        <div className="mr-auto place-self-center lg:col-span-8">
            <div className="flex items-center mb-3">
                <span className="text-5xl">👏🏻</span>
                <h4 className="2xl:text-2xl text-3xl font-bold inline text-white">Hi! I&apos;m</h4>
            </div>
            <div className="flex items-center">
                <h1 className="max-w-2xl min-[1920px]:text-8xl text-white 2xl:text-6xl mb-4 text-7xl font-extrabold tracking-tight leading-none md:text-8xl dark:text-white">John Ermy </h1>
                <Image src={memoji} width={150} height={150} alt="John Ermy" />
            </div>
            <div className="max-w-fit mb-4 shadow-md rounded-lg backdrop-blur-2xl bg-blue-500/30 border-0 p-4">
                <div className="flex items-center">
                <h1 className="max-w-2xl 2xl:text-base  mr-2 text-lg text-gray-300 font-extrabold md:font-bold tracking-tight leading-none">Always Active</h1>
                <span className="relative flex h-3 w-3 ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
                </span>
                </div>
            </div>
            

            <p className="max-w-2xl 2xl:text-base  mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I&apos;m passionate about Web Design and Graphic Design. If you are curious about my works, you can check it on <span className="font-extrabold">Behance</span></p>
            <p className="inline-flex mr-8 items-center justify-center py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                See more about me
                <span className="pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

                </span>
            </p>
            <motion.a href="https://drive.google.com/file/d/11BNH122Eg6sJT624_X1hgxKylmOB-hM3/view?usp=sharing" target="_blank" className="inline-flex w-full md:w-auto  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-lg hover:text-white  bg-gradient-to-r from-blue-700 to-blue-600  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
                Download CV
                <span className="pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>
                </span>
            </motion.a> 
            <motion.a href="https://www.facebook.com/JOHNERMY/" target="_blank" className="inline-flex items-center justify-center md:ml-4 mt-4 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </motion.a> 
            <motion.a href="https://www.instagram.com/johnermy.design" target="_blank" className="inline-flex items-center justify-center ml-2 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>

            </motion.a>
            <motion.a href="https://www.linkedin.com/in/johnermy/" target="_blank" className="inline-flex items-center justify-center ml-2 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>

            </motion.a>

            <motion.a href="https://github.com/johnymre" target="_blank" className="inline-flex items-center justify-center ml-2 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg enable-background="new 0 0 32 32" height="18" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="18" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="#fff" fill-rule="evenodd"/><g/><g/><g/><g/><g/><g/></svg>

            </motion.a>

            <motion.a href="https://www.behance.net/johnermy" target="_blank" className="inline-flex items-center justify-center ml-2 px-3 py-3 text-base font-medium text-center text-gray-900 border-dashed border-2 border-sky-500 rounded-full hover:text-white  bg-transparent  text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             
             <svg height="18" width="18" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path fill="#fff" d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"/></svg>

            </motion.a>
        </div>
            
    </div>
    </Card>
    </motion.div>
    </div>
    
</section>

</>
  );
}

