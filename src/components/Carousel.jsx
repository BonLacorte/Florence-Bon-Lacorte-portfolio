import React, { useEffect, useRef, useState } from "react";

export const Carousel = ({ images, architectureImages = [], path = "" }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState("project"); // "project" | "architecture"
    const carouselRef = useRef();
    const containerRef = useRef();

    const activeImages = activeTab === "project" ? images : architectureImages;

    const detectScroll = (entries) => {
        let nextSlide;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                nextSlide = parseInt(entry.target.getAttribute("data-index"));
                setCurrentSlide(nextSlide);
            }
        });
    };

    useEffect(() => {
        if (!carouselRef.current) return;
        
        let options = {
            root: carouselRef.current,
            rootMargin: "0px",
            threshold: 0.5,
        };

        let observer = new IntersectionObserver(detectScroll, options);
        const children = carouselRef.current.children;
        for (let i = 0; i < children.length; i++) {
            observer.observe(children[i]);
        }
        
        return () => observer.disconnect();
    }, [activeTab, activeImages]);

    const changeSlide = (direction) => {
        let nextSlide =
            direction === "left" ? currentSlide - 1 : currentSlide + 1;
        if (nextSlide < 0) nextSlide = activeImages.length - 1;
        else if (nextSlide >= activeImages.length) nextSlide = 0;
        let containerWidth = containerRef.current.clientWidth;
        carouselRef.current.scroll(nextSlide * containerWidth, 0);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentSlide(0);
        if (carouselRef.current) {
            carouselRef.current.scroll(0, 0);
        }
    };

    return (
        <div className="flex flex-col w-full h-full border-r border-[#0001] dark:border-[#fff1]">
            {architectureImages && architectureImages.length > 0 && (
                <div className="flex justify-center p-3 bg-light-fondo-secondary dark:bg-dark-fondo-secondary border-b border-[#0001] dark:border-[#fff1]">
                    <div className="flex p-1 bg-[#0001] dark:bg-[#fff1] rounded-full gap-1">
                        <button 
                            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${activeTab === 'project' ? 'bg-light-fondo-primary dark:bg-dark-fondo-primary shadow-sm text-light-texto-primary dark:text-dark-texto-primary' : 'text-light-texto-secondary dark:text-dark-texto-secondary hover:text-light-texto-primary dark:hover:text-dark-texto-primary'}`}
                            onClick={() => handleTabChange('project')}
                        >
                            View Project
                        </button>
                        <button 
                            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${activeTab === 'architecture' ? 'bg-light-fondo-primary dark:bg-dark-fondo-primary shadow-sm text-light-texto-primary dark:text-dark-texto-primary' : 'text-light-texto-secondary dark:text-dark-texto-secondary hover:text-light-texto-primary dark:hover:text-dark-texto-primary'}`}
                            onClick={() => handleTabChange('architecture')}
                        >
                            Architecture Overview
                        </button>
                    </div>
                </div>
            )}
            <div
                className="relative flex justify-center items-center w-full h-full bg-black overflow-hidden flex-1"
                ref={containerRef}
            >
                <ul
                    className="carousel-viewport flex gap-0 h-fit scroll-smooth snap-x snap-mandatory overflow-x-scroll overflow-y-hidden transition-all duration-200"
                    ref={carouselRef}
                >
                    {activeImages.map((image, index) => (
                        <li
                            className="flex-shrink-0 flex-grow-0 snap-start snap-always gap-0 w-full"
                            key={image}
                            data-index={index}
                        >
                            <img
                                className="w-full h-full object-contain"
                                src={`/projects/${path}/${image}`}
                                alt=""
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
                {currentSlide !== 0 && (
                    <button
                        className="absolute hidden sm:flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-light-texto-secondary bg-[#fffb] left-2 pr-[2px] hover:bg-[#fffe] transition-colors"
                        onClick={() => changeSlide("left")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            height="16"
                            width="16"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                )}
                {currentSlide !== activeImages.length - 1 && activeImages.length > 1 && (
                    <button
                        className="absolute hidden sm:flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-light-texto-secondary bg-[#fffb] right-2 hover:bg-[#fffe] transition-colors"
                        onClick={() => changeSlide("right")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            height="16"
                            width="16"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                )}
                <span className="absolute right-2 bottom-2 py-1 px-2 bg-[#fffb] rounded-md text-light-texto-secondary text-[0.75rem] font-bold z-10">
                    {currentSlide + 1} / {activeImages.length}
                </span>
            </div>
        </div>
    );
};
