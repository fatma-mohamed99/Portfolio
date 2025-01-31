import React from 'react'
import myPhoto from "../assets/My-photo.jpg";

export default function HeroSection() {
    return (
        <div>

            <section className=' max-w-xl'>
                <div className='text-amber-100 flex flex-col sm:flex-row-reverse sm:gap-1.5'>
                    <div className='flex flex-col self-center'>
                        <h1 className=' sm:text-xl xl:text-2xl font-bold mb-2 md:mb-4 text-center '>
                            Hello, I'm Fatma Mohamed
                        </h1>
                        <p className='hidden sm:block self-center text-center break-words flex-shrink-1'>
                            Front-End Developer crafting beautiful, responsive websites.
                            Let's create something amazing together!
                        </p>
                    </div>
                    <div className=' flex flex-col sm:flex-row'>
                        <div className="relative  self-center flex-shrink-0 h-32 w-32 sm:h-44 sm:w-44 md:h-50 md:w-50  xl:h-52 xl:w-52 border-4 rounded-full border-primary/40 ">
                            <img
                                src={myPhoto}
                                alt="Fatma Mohamed"
                                className=" rounded-full h-full w-full"
                            />
                        </div>
                        <p className='sm:hidden  block self-center text-center break-words'>
                            Front-End Developer crafting beautiful, responsive websites.
                            Let's create something amazing together!
                        </p>


                    </div>
                </div>

            </section>
        </div>
    )
}
