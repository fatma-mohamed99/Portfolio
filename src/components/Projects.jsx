import React from 'react';
import { FolderOpenDot, Github, ExternalLink } from 'lucide-react';

const projectsData = [
    {
        title: "Field-Talent",
        description: "A freelance platform connecting civil engineers with clients for construction projects like building or renovation. Engineers are verified with ID and graduation certificates.",
        technologies: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/fatma-mohamed99/Field-Talent",
        liveLink: ""
    },
    {
        title: "AutoGeer",
        description: "An e-commerce platform selling car spare parts.",
        technologies: ["Angular", "bootstrap"],
        githubLink: "https://github.com/fatma-mohamed99/AutoGeer",
        liveLink: ""
    },
    {
        title: "Examination System",
        description: "A pure JavaScript-based system for online exams.",
        technologies: ["JavaScript", "HTML", "CSS"],
        githubLink: "https://github.com/fatma-mohamed99/Examination_System",
        liveLink: ""
    },
    {
        title: "POSTS Blog",
        description: "A blog built with React and Tailwind CSS. A beginner project showcasing posts and their management.",
        technologies: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/fatma-mohamed99/POSTS",
        liveLink: ""
    }
];

export default function Projects() {
    return (
        <div className="text-amber-100 p-3 sm:p-2">
            <div className="container mx-auto">
                <h2 className="text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4">
                    <FolderOpenDot className="text-primary" />
                    Some Projects
                </h2>
                <div className="grid lg:grid-cols-2 gap-6   ">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-primary lg:max-h-fit lg:min-h-52 sm:max-w-fit  sm:min-w-[100%] min-w-[10%] max-w-[100%] flex flex-col lg:justify-between  p-6 rounded-xl transition-all duration-300 hover:scale-101 hover:shadow-md hover:shadow-amber-100 cursor-pointer"
                        >
                            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-primary/30 px-2 py-1 rounded-md text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.githubLink} target="_blank" className="hover:text-white transition-colors">
                                        <Github />
                                    </a>
                                    {project.liveLink && <a href={project.liveLink} target="_blank" className="hover:text-white transition-colors">
                                        <ExternalLink />
                                    </a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
