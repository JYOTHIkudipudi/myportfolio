import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Technical Hub",
    link: "https://technicalhub.io/",
    roles: [
      {
        role: "AWS Development Intern",
        period: "May 2024 - July 2024",
        bullets: [
          "Explored 15+ AWS services including EC2, Lambda, S3, IAM, VPC, and DynamoDB.",
          "Built and optimized cloud-based solutions with a focus on scalability, security, and performance.",
        ],
        outcome: "Strengthened expertise in cloud development and AWS infrastructure.",
        certificate:  {
          id : "THSI240109",
          completionDate: "15-07-2024",
          link: "https://drive.google.com/file/d/1P_XY5INTrcJeL8t8nAMENojHoU6WeGep/view?usp=sharing"
        }
      },
    ],
  },
  {
    company: "Smart Internz (APSCHE Collaboration)",
    link: "https://smartinternz.com/",
    roles: [
      {
        role: "Full Stack Development Intern (MERN)",
        period: "May 2025 - July 2025",
        bullets: [
          "Completed a 2-month short-term internship focused on MERN stack development.",
          "Gained hands-on experience with MongoDB, Express.js, React.js, and Node.js.",
          "Built practical full-stack projects that enhanced problem-solving and development skills.",
        ],
        outcome:
          "Enhanced practical knowledge in MERN development and gained industry-relevant project experience.",
        certificate: {
          id: "EXT-APSCHE_FSD-48656",
          completionDate: "21 July 2025",
          link: "https://drive.google.com/file/d/1TCmum0DzMCbR4l286tTpmRUDhPLcL2Sd/view?usp=sharing" 
        },
      },
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="select-none scroll-mt-[10vh] w-full z-10 h-fit gap-16 mx-auto bg-white dark:bg-neutral-800"
    >
      <div className="bg-[#F2F4F7] dark:bg-[#0F1115] rounded-4xl w-full h-fit py-10 pb-16">
        <div className="mx-auto my-0 rounded-4xl max-w-8/10">
          <div className="flex flex-col items-center justify-center pt-4 gap-6">
            <motion.h1
              className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center pl-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Internships <span className="text-blue-500">(Work Experience)</span>
            </motion.h1>
            <motion.span
              className="h-1 bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "20rem" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="w-full flex justify-center items-center px-4 py-16">
            <div className="w-full flex flex-row gap-6 items-center justify-center">
              <div className="flex md:flex-row flex-col gap-6 items-start justify-center">
                {/* Sidebar Tab List */}
                <div className="flex flex-col md:flex-col gap-3 w-full md:w-auto">
  {experiences.map((exp, index) => {
    const isActive = activeTab === index;
    return (
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`cursor-pointer group flex items-center px-3 py-2 text-left text-sm sm:text-base transition-all duration-300 border-l-4
          ${
            isActive
              ? "border-blue-500 text-blue-500 font-semibold"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-[#0D1B2A] hover:text-blue-500"
          }
        `}
      >
        {exp.company}
      </button>
    );
  })}
</div>

                {/* Content */}
                <motion.div
                  key={activeTab}
                  className="flex-1 space-y-6 max-w-xl"
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {experiences[activeTab].roles.map((role, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: i * 0.2,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h3 className="text-xl font-semibold text-black dark:text-white flex flex-wrap gap-1">
                        {role.role}{" "}
                        <span className="text-blue-500 underline hover:text-blue-600">
                          @
                          <a
                            href={experiences[activeTab].link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {experiences[activeTab].company}
                          </a>
                        </span>
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 mt-1">
                        {role.period}
                      </p>
                     {role.bullets && (
  <ul className="list-disc list-inside space-y-2 flex flex-wrap">
    {role.bullets.map((item, idx) => (
      <li key={idx} className="text-gray-700 dark:text-gray-200 text-base">
        {item}
      </li>
    ))}
  </ul>
)}

{role.outcome && (
  <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium">
    <strong>Outcome:</strong> {role.outcome}
  </p>
)}

{role.certificate && (
  <p className="text-sm text-blue-500 mt-2">
    Certificate ID: <span className="font-semibold">{role.certificate.id}</span> | 
    Completion Date: {role.certificate.completionDate} |{" "}
    <a
      href={role.certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-blue-600"
    >
      View Certificate
    </a>
  </p>
)}

                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
