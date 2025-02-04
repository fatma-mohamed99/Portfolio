// Home.js
import React from 'react';
import Contact from "../components/Contact";
import Education from "../components/Education";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";

export default function Home() {
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
            <div id="projects">
                <Projects />
            </div>
            <div id="education">
                <Education />
            </div>
            <AboutMe />
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}
