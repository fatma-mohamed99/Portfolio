import React, { useState, useEffect } from 'react';
import { House, ContactRound, FolderOpenDot, Code, GraduationCap } from 'lucide-react';

const Sidebar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { icon: House, label: 'Home', sectionId: 'hero' },
        { icon: Code, label: 'Skills', sectionId: 'skills' },
        { icon: FolderOpenDot, label: 'Experience', sectionId: 'projects' },
        { icon: GraduationCap, label: 'Education', sectionId: 'education' },
        { icon: ContactRound, label: 'Contact', sectionId: 'contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            const sidebarHeight = isScrolled ? 55 : 0;

            window.scrollTo({
                top: offsetTop - sidebarHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <aside className={isScrolled ? ' fixed top-1 left-1/2 -translate-x-1/2 z-50' : ''}>
            <div className={`flex ${isScrolled ? ' flex-row p-2 sm:p-5 gap-4 sm:gap-6 md:gap-10 xl:gap-12 bg-gradient-to-b from-primary/80 shadow-sm px-10 sm:px-32 md:px-52' : 'flex-col gap-4 animate-wiggle'} shadow-amber-100/40 shadow-md  text-amber-100 bg-gradient-to-b from-primary to-main h-auto w-fit p-4 rounded-2xl border-main `}>
                {navItems.map(({ icon: Icon, label, sectionId }, index) => (
                    <div
                        key={label}
                        onClick={() => scrollToSection(sectionId)}
                        className='flex items-center gap-2 transition-all duration-200 cursor-pointer transform hover:scale-103 hover:translate-x-1'
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <Icon className={`${isScrolled ? 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' : 'w-6 h-6 animate-pulse'}`} />
                        {!isScrolled && <span className='hidden md:inline'>{label}</span>}
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;