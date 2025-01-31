import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
    {
        degree: "Web Development Track (MEARN)",
        institution: "Information Technology Institute",
        year: "2024"
    },
    {
        degree: "Maximilian React Course",
        institution: "Online (Maximilian Schwarzmüller)",
        year: "2024"
    },
    {
        degree: "Bachelor's of Civil Engineering",
        institution: "Elshorouk Academy",
        year: "2018-2023"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="text-amber-100 p-3 sm:p-2">
            <div className="container mx-auto flex-col flex items-center" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4"
                >
                    <GraduationCap className="text-primary" />
                    My Education
                </motion.h2>

                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative flex items-center gap-2 sm:gap-8 mb-8 md:mb-12"
                        >
                            {index < educationData.length - 1 && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={isInView ? { height: '116%' } : { height: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="absolute left-4 top-[50%] w-0.5 h-[calc(100%-50%)] bg-primary/50"
                                />
                            )}

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                className="relative z-10"
                            >
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </motion.div>

                            <div className="flex-1 bg-primary p-6 rounded-xl sm:max-w-fit sm:min-w-[100%] min-w-[10%] max-w-[100%]">
                                <h3 className="text-xl xl:text-2xl font-semibold">{edu.degree}</h3>
                                <p className="text-lg mt-2">{edu.institution}</p>
                                <p className="mt-1">{edu.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}