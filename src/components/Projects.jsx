import React, { useState } from "react";
import { FolderOpenDot, Github, ExternalLink, Video, X } from "lucide-react";
import fieldTalent from "../assets/video/field-talent.mp4";
import exam from "../assets/video/exam.mp4";
import autoGeer from "../assets/video/auto-geer.mp4";

const projectVideos = {
    fieldTalent,
    exam,
    autoGeer,
};

const projectsData = [
    {
        title: "Wardlin",
        description: "Wardlin specializes in creating sustainable websites with a focus on performance, accessibility, and eco-friendly web solutions. We implement energy-efficient coding practices to optimize user experience while reducing environmental impact.",
        technologies: [],
        githubLink: "",
        liveLink: "https://www.wardlin.com",
    },
    {
        title: "IKNOWLY",
        description:
            "iknowly is Germany's premier marketplace connecting you with top professionals from leading companies. Discover expert guidance and career growth opportunities today.",
        technologies: ["Next.js", "Tailwind CSS"],
        githubLink: "",
        liveLink: "https://www.iknowly.com",
    },
    {
        title: "The-Badr-Lab",
        description:
            "The Badr Lab is a freelance project developed for Dr. Badr, a microbiome researcher in Germany. The website serves as a platform for introducing Dr. Badr and his team, showcasing their research, publications, and scientific contributions.",
        technologies: ["React", "TS", "Tailwind CSS"],
        githubLink: "https://github.com/fatma-mohamed99/the-badr-lab",
        liveLink: "https://the-badr-lab-iutb.vercel.app",
    },

    {
        title: "Field-Talent",
        description:
            "A freelance platform connecting civil engineers with clients for construction projects like building or renovation. Engineers are verified with ID and graduation certificates.",
        technologies: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/fatma-mohamed99/Field-Talent",
        liveLink: "",
        viewVideo: "fieldTalent",
    },
    {
        title: "AutoGeer",
        description: "An e-commerce platform selling car spare parts.",
        technologies: ["Angular", "TS", "Bootstrap"],
        githubLink: "https://github.com/fatma-mohamed99/AutoGeer",
        liveLink: "",
        viewVideo: "autoGeer",
    },
    {
        title: "Examination System",
        description: "A pure JavaScript-based system for online exams.",
        technologies: ["JavaScript", "HTML", "CSS"],
        githubLink: "https://github.com/fatma-mohamed99/Examination_System",
        liveLink: "",
        viewVideo: "exam",
    },
];

const VideoLoader = () => (
    <div className="flex items-center justify-center w-full h-64">
        <div className="relative">
            <div className="w-16 h-16 border-4 border-amber-100/30 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-amber-100 border-t-transparent animate-spin rounded-full absolute top-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Video className="text-amber-100 animate-pulse" size={24} />
            </div>
        </div>
    </div>
);

export default function Projects() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleVideoClick = (videoKey) => {
        setSelectedVideo(projectVideos[videoKey]);
        setIsLoading(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsLoading(false);
    };

    return (
        <div className="text-amber-100 p-3 sm:p-2">
            <div className="container mx-auto">
                <h2 className="text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4">
                    <FolderOpenDot className="text-primary" />
                    Experience
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-primary lg:max-h-fit lg:min-h-52 sm:max-w-fit sm:min-w-full min-w-[10%] max-w-full flex flex-col lg:justify-between p-6 rounded-xl transition-all duration-300 hover:scale-101 hover:shadow-sm hover:shadow-amber-100 "
                        >
                            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex justify-between items-center flex-wrap gap-1">
                                <div className="flex justify-between items-center flex-wrap gap-1">
                                    {project.technologies && project.technologies.length > 0 && (
                                        <div className="flex gap-1 sm:gap-2 flex-wrap">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-main/40 px-2 rounded-md text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-3 pl-2 sm:pl-0 pt-2 sm:pt-0">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-white transition-colors"
                                        >
                                            <Github />
                                        </a>
                                    )}
                                    {project.viewVideo && (
                                        <button
                                            onClick={() => handleVideoClick(project.viewVideo)}
                                            className="hover:text-white transition-colors cursor-pointer"
                                        >
                                            <Video />
                                        </button>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-white transition-colors"
                                        >
                                            <ExternalLink />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 bg-main/80 bg-opacity-70 z-50 flex items-center justify-center p-4">
                    <div className="rounded-lg max-w-3xl w-full relative">
                        <div className="flex justify-end">
                            <button
                                onClick={closeModal}
                                className="hover:bg-primary p-2 rounded-sm cursor-pointer"
                            >
                                <X className="text-amber-100" />
                            </button>
                        </div>

                        {isLoading && <VideoLoader />}

                        <video
                            src={selectedVideo}
                            autoPlay
                            className={`w-full h-auto rounded-lg ${isLoading ? 'hidden' : 'block'}`}
                            onLoadedData={() => setIsLoading(false)}
                            onLoadedMetadata={(e) => e.target.playbackRate = 2}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}