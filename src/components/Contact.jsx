import React from 'react';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            type: "Email",
            value: "fatma.mohamed13499@gmail.com",
            link: "mailto:fatma.mohamed13499@gmail.com"
        },
        {
            icon: Linkedin,
            type: "LinkedIn",
            value: "Fatma Mohamed Ali",
            link: "https://www.linkedin.com/in/fatma-mohamed-alii"
        },
        {
            icon: Github,
            type: "GitHub",
            value: "fatma-mohamed99",
            link: "https://github.com/fatma-mohamed99"
        },
        {
            icon: Phone,
            type: "Phone",
            value: "+20 106 029 9607",
            link: ""
        }
    ];

    return (
        <div className=" text-amber-100  p-3 sm:p-2  flex items-center border-t-8 border-primary/40 rounded-4xl">
            <div className="container mx-auto pt-4 ">
                <h2 className="text-3xl xl:text-4xl font-bold mb-12 flex items-center gap-4">
                    <Send className="text-primary" />
                    Connect with Me
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {contactInfo.map((contact, index) =>
                        contact.link ? (
                            <a
                                key={index}
                                href={contact.link}
                                target="_blank"
                                className="bg-primary/40 sm:max-w-fit  sm:min-w-[100%] min-w-[10%] max-w-[100%] p-6 rounded-xl flex items-center gap-4 hover:shadow-md hover:shadow-amber-100 cursor-pointer transition-transform"
                            >
                                <contact.icon className="w-6 h-6 sm:w-8 sm:h-8  md:w-10 md:h-10" />
                                <div>
                                    <h3 className="text-xl font-semibold">{contact.type}</h3>
                                    <p className='break-all'>{contact.value}</p>
                                </div>
                            </a>
                        ) : (
                            <div
                                key={index}
                                className="bg-primary/40 p-6 rounded-xl flex items-center gap-4"
                            >
                                <contact.icon className=" w-6 h-6  sm:w-8 sm:h-8  md:w-10 md:h-10" />
                                <div>
                                    <h3 className="text-xl font-semibold">{contact.type}</h3>
                                    <p>{contact.value}</p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
