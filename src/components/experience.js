import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBookOpen } from "react-icons/hi2";
import Image from "next/image";
import Acm from "../media/acmlog.png";
import Str from "../media/strugendl.png";
import Laq from "../media/laqshy.png";

const experience = () => {
  const data = [
    {
      id: 1,
      logo: Acm,
      company: "ACM Club",
      role: "Frontend Developer Intern",
      duration: "August 2023 - Present",
      description:
        "Contributing to the development of the official landing page for the ACM club of MHSSCE. Developing components to address various UI requirements.",
    },
    {
      id: 2,
      logo: Str,
      company: "Strugend",
      role: "Full Stack Web Developer Intern",
      duration: "December 2022 -March 2023",
      description:
        "Contributed to the development of a responsive Booking management website using React.Worked on frontend component libraries like Material UI , Chakra UI. Lead a team of four developers integrated frontend component libraries.which 30% increase in user interaction.",
    },
    {
      id: 3,
      logo: Laq,
      company: "Laqshya Infosoft Solutions",
      role: "Java Application development Intern",
      duration: "October 2021 - March 2022",
      description:
        "Developed a desktop application for a client using Java Swing and MySQL. The application was used to manage the inventory of the client’s business. The application was developed in a team of 3 developers.",
    },
  ];
  return (
    <div>
      <motion.div
        className="text-3xl font-[700] tracking-wide md:pt-4 text-[#F8F8F8] px-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Resume
      </motion.div>
      <motion.div
        className="ml-2 md:mt-4 mt-2 rounded-md md:p-1 p-0.5 bg-[#FDC764] "
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 50 }}
        transition={{ duration: 0.9 }}
      ></motion.div>
      <motion.ol
        class="relative border-s border-gray-200 dark:border-gray-700 md:mt-8 mt-6 px-2 md:ml-8 ml-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <li class="mb-10 ms-6 px-2">
          <span class="absolute flex items-center justify-center bg-[#202022]  border-[#383838] border-l-2 border-t-2 rounded-md -start-5 p-2 ">
            <HiOutlineBookOpen className="inline-block text-2xl text-[#FDC764] " />
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </span>
          <h3 class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
            Experience
          </h3>
        </li>
        {data.map((item) => {
          return (
            <li class="mb-10 ms-6 px-2">
              <span class="absolute flex items-center justify-center -start-5 h-10 w-10 bg-[#d1cdcd] rounded-2xl py-2 px-0">
                <Image src={item.logo} alt="Acm" width={50} height={40} />
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </span>
              <h3 class="mb-1 text-md font-semibold text-gray-900 dark:text-white">
                {item.company}
              </h3>
              <time class="block mb-2 text-sm font-normal  text-[#FDC764]">
                {item.role} &nbsp; &nbsp;({item.duration})
              </time>

              <time class="block mb-2 text-sm font-normal leading-2 text-[#D6D6D6]">
                {item.description}
              </time>
            </li>
          );
        })}
      </motion.ol>
      <hr className="md:block mx-8  mt-8  border-[#383838] border-2 ease-in duration-300" />
      <motion.ol
        class="relative border-s border-gray-200 dark:border-gray-700 md:mt-8 mt-4 px-2 md:ml-8 ml-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <li class="mb-10 ms-6 px-2">
          <span class="absolute flex items-center justify-center bg-[#202022]  border-[#383838] border-l-2 border-t-2 rounded-md -start-5 p-2 ">
            <HiOutlineBookOpen className="inline-block text-2xl text-[#FDC764] " />
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </span>
          <h3 class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
            Education
          </h3>
        </li>

        <li class="mb-6 ms-6">
          <span class="absolute flex items-center justify-center bg-[#FDC764] w-2 h-2  rounded-full -start-1 mt-2 ring-8 ring-white dark:ring-[#383838] ">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </span>
          <h3 class="mb-1 text-md font-semibold text-gray-900 dark:text-white">
            Bachelor of Engineering (BE) in Information Technology
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-[#FDC764]">
            2020 - 2024
          </time>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            M.H. Saboo Siddik College of Engineering
          </time>
          <time class="block mb-2 text-sm font-normal leading-none text-[#D6D6D6]">
            CGPA 9.14
          </time>
        </li>
        <li class="mb-6 ms-6">
          <span class="absolute flex items-center justify-center bg-[#FDC764] w-2 h-2  rounded-full -start-1 mt-2 ring-8 ring-white dark:ring-[#383838] ">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </span>
          <h3 class="mb-1 text-md font-semibold text-gray-900 dark:text-white">
            Higher Secondary Certificate (HSC)
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-[#FDC764]">
            2019 - 2020
          </time>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            T. P. Bhatia College of Science
          </time>
          <time class="block mb-2 text-sm font-normal leading-none text-[#D6D6D6]">
            79.69%
          </time>
        </li>
        <li class="mb-12 ms-6">
          <span class="absolute flex items-center justify-center bg-[#FDC764] w-2 h-2  rounded-full -start-1 mt-2 ring-8 ring-white dark:ring-[#383838] "></span>
          <h3 class="mb-1 text-md font-semibold text-gray-900 dark:text-white">
            Secondary School Certificate (SSC)
          </h3>
          <div className="block mb-2 text-sm font-normal leading-none text-[#FDC764]">
            2017 - 2018
          </div>
          <div className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            N. G. K. Gokhale High School
          </div>
          <div className="block mb-2 text-sm font-normal leading-none text-[#D6D6D6]">
            85.20%
          </div>
        </li>
      </motion.ol>
    </div>
  );
};

export default experience;
