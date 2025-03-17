import React, { useState } from 'react';
import Contact from "../components/Contact";
import Education from "../components/Education";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import NumberGuessingGame from '../components/NumberGuessingGame';

export default function Home() {
    const [isGameVisible, setIsGameVisible] = useState(false);

    const toggleGame = () => {
        setIsGameVisible(!isGameVisible);
    };
    return (
        <div className='container mx-auto   flex flex-col gap-44 min-h-screen max-w-fit  '>
            <div className="bg-main/40 z-10   flex md:gap-12 sm:gap-8 gap-2 justify-center items-center border-b-8 border-primary/40 rounded-4xl px-2 md:px-12 p-2 py-4  w-fit mx-auto ">

                <div id="hero">
                    <HeroSection />
                </div>
                <Sidebar />
            </div>

            <div id="skills">
                <Skills />
            </div>
            <div id="experience">
                <Projects />
            </div>
            <div id="education">
                <Education />
            </div>
            <AboutMe />
            <div className='flex flex-col items-center'>
                <button
                    onClick={toggleGame}
                    className="mx-auto cursor-pointer bg-primary text-amber-100 px-6 py-3 rounded-lg hover:bg-primary/40 transition-opacity"
                >
                    {isGameVisible ? 'Hide Game' : "Let's Play"}
                </button>

                {isGameVisible && (
                    <div className="mx-auto">
                        <NumberGuessingGame />
                    </div>
                )}
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}
