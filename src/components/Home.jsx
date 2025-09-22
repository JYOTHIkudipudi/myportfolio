import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
     <motion.img
  src="/jyothi.png"
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover"
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
/>


      {/* Overlay (optional dark/blur layer for text readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
            <span className="text-white-400 animate-pulse">Hello!</span> <br />
          I'm <span className="text-blue-400">JYOTHI Kudipudi</span>, <br />
          <Typewriter
            words={["FullStack Developer","AWS Cloud Developer", "Coder"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-xl font-medium mt-4">
          An aspiring Computer Science graduate, <br  /> 
Driven to create innovative and impactful  
Digital Experiences.  

        </p>
      </div>
    </section>
  );
};

export default Home;
