import { UserPen } from "lucide-react";
import React from "react";

const AboutMe = () => {
    return (
        <section className=" text-amber-100  ">
            <div className="container mx-auto  p-3 sm:p-2  ">
                <h2 className="text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4">
                    <UserPen className="text-primary" />
                    About Me</h2>
                <p className="text-base xl:text-lg leading-relaxed p-4 bg-gradient-to-b from-primary/10 to-main rounded-4xl">
                    I am a passionate <span className="text-lg xl:text-xl font-extrabold">Front-End Developer</span> with a strong
                    background in Civil Engineering. While pursuing my degree in Civil Engineering, I
                    discovered my true calling in the world of web development. This realization inspired me
                    to pursue extensive studies and courses in the field, which led me to take part in a Full
                    Stack Web Development program, provided by the ITI in Egypt. The MERN stack course covered
                    both front-end and back-end development, but I found myself drawn more towards Front-End
                    Development, where I have been focusing my energy and learning continuously.
                </p>
                <p className="text-base xl:text-lg leading-relaxed mt-4 p-4 bg-gradient-to-b from-primary/10 to-main rounded-4xl">
                    Every day, I strive to improve my skills and stay updated with the latest technologies.
                    I am passionate about creating visually appealing, responsive, and intuitive user
                    interfaces. With a keen eye for design and functionality, I aim to build engaging
                    experiences that delight users.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
