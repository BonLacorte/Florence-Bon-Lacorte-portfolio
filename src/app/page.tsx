"use client";

import React, { useState, useEffect } from "react"
import Main from "./section/main"
import Projects from "./section/projects"
import About from "./section/about"
import ExpEdu from "./section/expedu"
import Skills from "./section/skills"
import Contact from "./section/contact"
import { motion } from "framer-motion";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor"


export default function Home() {
   return (
   <>
    <Main />
    <Projects />
    <About />
    <ExpEdu />
    <Skills />
    <Contact />
    <div className="absolute md:block hidden">
    <AnimatedCursor
  innerSize={5}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '2px solid #fff'
  }}
  innerStyle={{
    backgroundColor: '#fff'
  }}
/>
</div>
      
</>
  );
}

