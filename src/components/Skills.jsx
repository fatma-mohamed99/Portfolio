import React from 'react';
import { Code } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillsData = [
    {
        name: 'HTML',
        iconPath: '/Portfolio/icons/html.svg',
        color: 'from-orange-500/20 to-transparent'
    },
    {
        name: 'CSS',
        iconPath: '/Portfolio/icons/css.svg',
        color: 'from-blue-500/20 to-transparent'
    },
    {
        name: 'JavaScript',
        iconPath: '/Portfolio/icons/javascript.svg',
        color: 'from-yellow-500/20 to-transparent'
    },
    {
        name: 'TypeScript',
        iconPath: '/Portfolio/icons/typescript.svg',
        color: 'from-blue-600/20 to-transparent'
    },
    {
        name: 'React',
        iconPath: '/Portfolio/icons/react.svg',
        color: 'from-cyan-500/20 to-transparent'
    },
    {
        name: 'Next.js',
        iconPath: '/Portfolio/icons/next.svg',
        color: 'from-gray-500/20 to-transparent'
    },
    {
        name: 'Angular',
        iconPath: '/Portfolio/icons/angular.svg',
        color: 'from-red-500/20 to-transparent'
    },
    {
        name: 'Tailwind CSS',
        iconPath: '/Portfolio/icons/tailwind.svg',
        color: 'from-teal-500/20 to-transparent'
    },
    {
        name: 'Bootstrap',
        iconPath: '/Portfolio/icons/bootstrap.svg',
        color: 'from-purple-500/20 to-transparent'
    },
    {
        name: 'Material UI',
        iconPath: '/Portfolio/icons/material-ui.svg',
        color: 'from-blue-500/20 to-transparent'
    },
    {
        name: 'SASS',
        iconPath: '/Portfolio/icons/sass.svg',
        color: 'from-pink-500/20 to-transparent'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="text-amber-100 p-3 sm:p-2">
            <div className="container mx-auto" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4"
                >
                    <Code className="text-primary" />
                    My Skills
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center p-6 h-40">
                                <img
                                    src={skill.iconPath}
                                    alt={skill.name}
                                    className="w-28 h-28 mb-4 transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="text-lg font-medium text-center">
                                    {skill.name}
                                </span>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}