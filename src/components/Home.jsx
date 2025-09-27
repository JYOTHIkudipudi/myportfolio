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
            <span className="text-white-400 animate-pulse">こんにちは!</span> <br />
          私は <span className="text-blue-400">ジョーティ・クディプディ</span>, <br />
          <Typewriter
            words={["フルスタック開発者",   "AWSクラウド開発者",  "コーダー"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-xl font-medium mt-4">
          コンピュータサイエンスを専攻する卒業見込み者、<br />
革新的で影響力のある<br />
デジタル体験の創造に情熱を注ぐ。
 

        </p>
      </div>
    </section>
  );
};

export default Home;
