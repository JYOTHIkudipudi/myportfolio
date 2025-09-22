import React from "react";

const Footer = () => {
    return (
        <footer className="text-center pb-8 pt-4 bg-white dark:bg-neutral-800">
            <a
                href="https://github.com/JYOTHIkudipudi/myportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-100 hover:text-black dark:hover:text-blue-400 font-bold font-jetBrains transition-colors duration-300 px-2 sm:px-4 inline-block leading-relaxed"
            >
                Built by JYOTHI Kudipudi
            </a>
        </footer>
    );
};

export default Footer;
