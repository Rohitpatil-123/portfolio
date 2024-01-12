import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";
import { PiFileCode } from "react-icons/pi";
import { GiArtificialIntelligence } from "react-icons/gi";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className=""
    >
      <motion.div
        className="text-3xl font-[700] tracking-wide md:pt-4 text-[#F8F8F8] px-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        About Me
      </motion.div>
      <motion.div
        className="ml-2 md:mt-4 mt-2 rounded-md md:p-1 p-0.5 bg-[#FDC764] "
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 50 }}
        transition={{ duration: 0.9 }}
      ></motion.div>
      <div className="text-[#D6D6D6] tracking-wide text-md md:mt-8 mt-4 px-2">
        Hey there! I'm Rohit Sanjay Patil Pursuing a Bachelor's degree in
        Information Technology, I'm driven by a curiosity to explore the
        limitless possibilities of the digital realm. My academic pursuits have
        equipped me with a strong foundation in IT concepts and technologies.{" "}
        <br />
        <br />I love Problem solving and have solved 250+ problems on leetcode.
        I thrive on dissecting challenges and engineering effective solutions.
        <div className="text-2xl font-[700] tracking-wide mt-8 text-[#F8F8F8] px-1">
          What I'm Doing
        </div>
        <div className="w-full flex flex-wrap justify-start   gap-8 md:mt-7 mt-7">
          <div className="bg-[#222224] w-[100%] md:w-[47%] text-[#FFFFFF]  border-[#383838] border-t-2 border-l-2  rounded-2xl  overflow-hidden">
            <div className="flex md:flex-row items-center md:items-start flex-col md:gap-5 gap-3 md:px-3 md:py-6 px-3 py-4">
              <div className="mt-1 ">
                <FaLaptopCode className="inline-block text-4xl text-[#FDC764] " />
              </div>
              <div className=" flex flex-col gap-1 items-center md:items-start">
                <div className="text-[#F8F8F8] font-[600] text-lg">
                  Frontend Development
                </div>
                <div className="text-[#CCCCCC] text-sm text-center md:text-left">
                  Crafting intuitive and responsive interfaces to enhance user
                  experiences.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#222224] w-[100%] md:w-[47%] text-[#FFFFFF]  border-[#383838] border-t-2 border-l-2  rounded-2xl  overflow-hidden">
            <div className="flex md:flex-row items-center md:items-start flex-col md:gap-5 gap-3 md:px-3 md:py-6 px-3 py-4">
              <div className="mt-1 ">
                <PiFileCode className="inline-block text-4xl text-[#FDC764] " />
              </div>
              <div className=" flex flex-col gap-1 items-center md:items-start">
                <div className="text-[#F8F8F8] font-[600] text-lg">
                  Backend Development
                </div>
                <div className="text-[#CCCCCC] text-sm text-center md:text-left">
                  Building server-side solutions for seamless data management
                  and functionality.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#222224] w-[100%] md:w-[47%] text-[#FFFFFF]  border-[#383838] border-t-2 border-l-2  rounded-2xl  overflow-hidden">
            <div className="flex md:flex-row items-center md:items-start flex-col md:gap-5 gap-3 md:px-3 md:py-6 px-3 py-4">
              <div className="mt-1 ">
                <FaLaptopCode className="inline-block text-4xl text-[#FDC764] " />
              </div>
              <div className=" flex flex-col gap-1 items-center md:items-start">
                <div className="text-[#F8F8F8] font-[600] text-lg">
                  Web Designing
                </div>
                <div className="text-[#CCCCCC] text-sm text-center md:text-left">
                  urning ideas into designs that balance aesthetics and
                  usability seamlessly.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#222224] w-[100%] md:w-[47%] text-[#FFFFFF]  border-[#383838] border-t-2 border-l-2  rounded-2xl  overflow-hidden">
            <div className="flex md:flex-row items-center md:items-start flex-col md:gap-5 gap-3 md:px-3 md:py-6 px-3 py-4">
              <div className="mt-1 ">
                <GiArtificialIntelligence className="inline-block text-4xl text-[#FDC764] " />
              </div>
              <div className=" flex flex-col gap-1 items-center md:items-start">
                <div className="text-[#F8F8F8] font-[600] text-lg">
                  AI & Machine Learning
                </div>
                <div className="text-[#CCCCCC] text-sm text-center md:text-left">
                  Generating insights and predictions through machine learning
                  algorithms and models.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6"></div>
      </div>
    </motion.div>
  );
};

export default about;
