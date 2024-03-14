import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Aws1 from "../media/aws1.png";
import Java from "../media/java.png";
import Aws2 from "../media/aws2.png";
import Image from "next/image";

const skill = () => {
  const frontend = [
    "Html",
    "Css",
    "React",
    "Next",
    "Redux",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Chakra",
    "Material UI",
  ];
  const backend = [
    "Node",
    "Express",
    "MongoDB",
    "Firebase",
    "PostgreSQL",
    "Mongoose",
    "JWT",
    "flask",
  ];
  const course = [
    "Data Structures",
    "Algorithms",
    "Object Oriented Programming",
    "Operating System",
    "Database Management System",
    "Computer Networks",
  ];
  var all = [...frontend, ...backend, ...course];
  const [mains, setMains] = useState(all);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <motion.div
        className="text-3xl font-[700] tracking-wide md:pt-4 text-[#F8F8F8] px-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Skills
      </motion.div>
      <motion.div
        className="ml-2 md:mt-4 mt-2 rounded-md md:p-1 p-0.5 bg-[#FDC764] "
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 50 }}
        transition={{ duration: 0.9 }}
      ></motion.div>

      <div className="flex flex-col border-2 mt-8 rounded-2xl border-[#383838]  min-h-[350px] overflow-hidden">
        <div className="flex md:flex-row md:justify-between flex-col md:gap-0 gap-2 w-full py-4 px-3 border-b-2 border-[#383838] ">
          <div className="text-[#F8F8F8] font-[600] text-lg">
            My Top Skills{" "}
          </div>
          <div className="flex my-auto gap-4">
            <div
              className={`  font-[400] text-sm cursor-pointer ${
                mains.length == all.length ? "text-[#FDC764]" : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setMains(all);
              }}
            >
              All
            </div>
            <div
              className={`  font-[400] text-sm cursor-pointer ${
                mains.length == frontend.length
                  ? "text-[#FDC764]"
                  : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setMains(frontend);
              }}
            >
              Frontend
            </div>
            <div
              className={`  font-[400] text-sm cursor-pointer ${
                mains.length == backend.length
                  ? "text-[#FDC764]"
                  : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setMains(backend);
              }}
            >
              Backend
            </div>
            <div
              className={`  font-[400] text-sm cursor-pointer ${
                mains.length == course.length
                  ? "text-[#FDC764]"
                  : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setMains(course);
              }}
            >
              CourseWork
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full p-2 gap-3">
          {mains.map((index) => (
            <div className="bg-gradient-to-r from-[#f9c86d] to-[#e9ab37] text-[#000000] font-[600] md:p-2 p-1 mb-1 mt-1  rounded-lg text-center overflow-hidden  text-sm ">
              {index}
            </div>
          ))}
        </div>
      </div>
      <div className="text-2xl text-white mt-4 mx-2 font-[600] tracking-wide">
        Certifications
      </div>
      <div className="flex w-[100%] flex-wrap ml-2 mt-4 gap-2 text-[#D6D6D6] mb-8 ">
        <div className="flex w-[49%] text-wrap gap-4 ">
          <Image src={Aws1} alt="java" width={50} height={50} />
          <a
            target="_blank"
            rel="noopener noreferrerk"
            className="hover:underline my-auto"
            href="https://drive.google.com/file/d/1JtlWsbRiy9ZKopWT-3YdVHxe6Zv-mGbO/view?usp=sharing"
          >
            AWS Academy Introduction to Cloud Semester 1
          </a>
        </div>
        <div className="flex w-[49%] text-wrap gap-4 ">
          <Image src={Java} alt="java" width={50} height={80} />
          <a
            target="_blank"
            rel="noopener noreferrerk"
            className="hover:underline my-auto"
            href="https://drive.google.com/file/d/1ZIS_bbIdI_sMQdtYhqTpglUN8Mm7NDo5/view?usp=sharing"
          >
            Java Development
          </a>
        </div>
        <div className="flex w-[49%] text-wrap gap-4 mt-3">
          <Image src={Aws2} alt="java" width={50} height={50} />
          <a
            target="_blank"
            rel="noopener noreferrerk"
            className="hover:underline my-auto"
            href="https://drive.google.com/file/d/13obz-sWHRr1D_MbRWWPsxQGfkj58YT_f/view?usp=sharing"
          >
            AWS Academy Machine Learning Foundations
          </a>
        </div>
      </div>
      {/* <div className="flex gap-4 flex-wrap w-[100%] border-2 ml-2 text-[#D6D6D6] mt-2 mb-8">
        <div classname="flex flex-row w-[50%]"> */}
      {/* <Image src={Aws1} alt="java" width={50} height={50} /> */}
      {/* <div className="text-[#FDC764]">cbdbchsjdc</div>
          <div className="text-[#FDC764]">cbdbchsjdc</div> */}
      {/* <a
            target="_blank"
            rel="noopener noreferrerk"
            href="https://drive.google.com/file/d/1ZIS_bbIdI_sMQdtYhqTpglUN8Mm7NDo5/view?usp=sharing"
          >
            java Development
          </a> */}
      {/* </div> */}
      {/* <div classname="flex w-[50%] ">
          <Image src={Aws1} alt="java" width={50} height={50} />
          <a href="https://drive.google.com/file/d/13obz-sWHRr1D_MbRWWPsxQGfkj58YT_f/view?usp=sharing">
            AWS Academy Machine Learning Foundations
          </a>
        </div>
        <div classname="flex">
          <Image src={Aws1} alt="java" width={50} height={50} />
          <a href="https://drive.google.com/file/d/13obz-sWHRr1D_MbRWWPsxQGfkj58YT_f/view?usp=sharing">
            AWS Academy Introduction to Cloud Semester 1
          </a>
        </div> */}
      {/* <ul className="flex flex-col gap-2">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrerk"
              href="https://drive.google.com/file/d/1ZIS_bbIdI_sMQdtYhqTpglUN8Mm7NDo5/view?usp=sharing"
            >
              java Development
            </a>
          </li>
          <li className=" ">
            <a href="https://drive.google.com/file/d/13obz-sWHRr1D_MbRWWPsxQGfkj58YT_f/view?usp=sharing">
              AWS Academy Machine Learning Foundations
            </a>
          </li>
        </ul> */}
      {/* </div> */}
    </motion.div>
  );
};

export default skill;
