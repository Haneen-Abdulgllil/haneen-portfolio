import React, { useState } from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import {Tech } from "../components";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const DownloadCVButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // This timeout simulates the download process; adjust the delay as needed.
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // Resets after 2 seconds
  };

  return (
    <div className="mt-10">
      <a href="/HANEEN_RESUME.pdf" download onClick={handleDownload}>
        <button className="download-btn bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-secondary font-bold shadow-md shadow-primary">
          {isDownloading ? "Downloading..." : "Download CV"}
        </button>
      </a>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Know about me more!</p>
        <h2 className={styles.sectionHeadText}>Who is Haneen.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'
      >
        I am a highly skilled Full Stack Web Developer with a robust background in both frontend and backend technologies. I have extensive experience in crafting responsive, user-friendly interfaces using HTML, CSS, Tailwind, JavaScript, ReactJS, and NextJS, as well as developing scalable backend systems with NodeJS, PHP (Laravel), and SpringBoot. My expertise also includes working with databases such as MongoDB, MySQL, and PostgreSQL, and I am proficient in TypeScript for building type-safe applications.I have hands-on experience with Docker and Kubernetes for containerization and orchestration, and I follow Agile principles to ensure efficient and collaborative development. Additionally, I am well-versed in version control using GIT and GitHub. my main focus remains on delivering high-quality web applications using modern web development stacks.
    
      </motion.p>

      <DownloadCVButton />


      <div className='mt-20 flex flex-wrap gap-10'>
      
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
       
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");