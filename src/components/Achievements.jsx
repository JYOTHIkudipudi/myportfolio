import React, { useState } from "react";
import bgImage from "../assets/backgroundImg1.png";
import topperCertificate from "../assets/topperCertificate.jpg";
import Project from "../assets/Project.jpg"
import leetcode from "../assets/leetcode.png"
import gfg from "../assets/gfg.png"
import codechef from "../assets/codechef.png"
import hackerrank from "../assets/hackerrank.png"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    link: "https://www.credly.com/badges/58174ffd-a3dd-4ba2-9e3f-14878972a543/public_url",
  },
  {
    title: "IT Specialist in Java",
    issuer: "Certiport Pearson",
    link: "https://www.credly.com/badges/d19d2248-b05f-4780-b833-de7f51d74a79/public_url",
  },
  {
    title: "AWS Certified Developer –Associate",
    issuer: "Amazon Web Services Training and Certification",
    link: "https://www.credly.com/badges/b11cfa9e-ae71-4dd7-b660-444c1c49bcd6/public_url",
  },
  {
    title: "Advanced Programming in C++",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1apI2Hd4mU1orT-mUqi2EgpzoHf8hcU4e/view?usp=sharing",
  },
];

const achievements = [
  {
    title: "CSE Department Topper(1-2 Semster) | CGPA 9.2",
    type: "modal",
    photo: topperCertificate,
  },
  {
    title: "Top 30 Team – @Technical Hub Project (YUKTI Government Initiative)",
    type: "modal", 
    photo: Project ,
  },
];


const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/JYOTHI_03/",
    logo: leetcode,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/jyothi03/",
    logo: gfg,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/jyothishi",
    logo: codechef,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/Jyothi_Kudipudi",
    logo: hackerrank,
  },
];


const tabs = ["Certifications", "Coding Profiles", "Achievements"];

const AchievementModal = ({ achievement, open, setOpen }) => {
  if (!achievement || !open) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => setOpen(null)}
    >
      <div
        className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-2xl relative max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-4">
          {achievement.title}
        </h2>
                <img
          src={achievement.photo}
          alt={achievement.title}
          className="w-full h-auto rounded-md"
        />
        <button
          onClick={() => setOpen(null)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("Coding Profiles");
  const [openAchievement, setOpenAchievement] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "Certifications":
        return (
          <ul className="space-y-3 text-sm sm:text-base">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className="flex min-w-0 flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 text-white"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words sm:whitespace-nowrap whitespace-normal text-white hover:text-blue-200"
                >
                  <span className="font-bold">{cert.title}</span>
                </a>
                <span className="italic text-sm text-gray-300">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        );
case "Coding Profiles":
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {codingProfiles.map((profile, idx) => (
        <button
          key={idx}
          onClick={() => window.open(profile.url, "_blank")}
          className="flex flex-col items-center bg-white/10 hover:bg-blue-400 transition duration-300 text-white px-4 py-3 rounded-lg shadow-md gap-2 w-32"
        >
          {profile.logo && (
            <img
              src={profile.logo}
              alt={profile.name}
              className="w-10 h-10 object-contain"
            />
          )}
          <span className="font-semibold text-sm text-center">{profile.name}</span>
        </button>
      ))}
    </div>
  );




case "Achievements":
  return (
    <div className="flex flex-col gap-3">
      {achievements.map((item, idx) =>
        item.type === "modal" ? (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-2"
          >
            <span className="text-white text-lg font-semibold">{item.title}</span>
            <button
              className="bg-transparent text-blue-400 border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white"
              onClick={() => setOpenAchievement({ ...item })}
            >
              Picture
            </button>
          </div>
        ) : (
          <p key={idx} className="text-white px-4 py-2">
            {item.title}
          </p>
        )
      )}

      {/* Use the AchievementModal component */}
      <AchievementModal
        achievement={openAchievement}
        open={!!openAchievement}
        setOpen={setOpenAchievement}
      />
    </div>
  );





    }
  };

  return (
    <section
      id="achievements"
      className="select-none scroll-mt-[10vh] py-10 w-full max-w-full z-10 h-fit mx-auto bg-white dark:bg-neutral-800"
    >
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="border-2 border-white/30 z-10 rounded-3xl h-full w-full bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-16 py-12 sm:py-10 md:py-12 flex flex-col items-center"
      >
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Certifications & <span className="text-blue-400">Achievements</span>
        </motion.h1>

        <motion.span
          className="h-1 bg-bluee-400 mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <div className="flex flex-wrap justify-center gap-3 mb-8 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-300 text-white hover:bg-blue-400"
              } backdrop-blur-lg border border-white/20`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 w-full max-w-4xl min-h-[260px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
