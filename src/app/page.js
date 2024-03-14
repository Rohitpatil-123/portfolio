"use client";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneAndroid } from "react-icons/md";
import { LuStickyNote } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Rohit from "../media/rohit.png";
import Rp from "../media/rppht.png";
import { useState } from "react";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skill";
import Contact from "../components/contact";
import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";

export default function Home() {
  const [show, setShow] = useState(false);
  const [comp, setComp] = useState("about");
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full my-4 mx-6 md:my-12 md:w-9/12 flex flex-col md:flex-row gap-4">
        <div className="w-full h-fit md:w-[18%] bg-[#1E1E1F]  border-[1px] rounded-3xl border-[#383838] relative md:fixed overflow-hidden">
          <div className="my-2 mx-4  flex md:gap-2 gap-4 md:flex-col md:justify-center md:items-center">
            <div className="bg-[#383839] w-20 h-20 md:w-36 px-2  md:h-36 rounded-3xl overflow-hidden my-auto md:mt-10">
              <Image
                src={Rp}
                alt="Rohit"
                style={{
                  height: "120%",
                  width: "100%",
                }}
              />
            </div>
            <div className="flex flex-col justify-center md:items-center ">
              <div className="md:text-2xl text-xl tracking-wide md:mt-4 mt-3 text-[#FAFAFA] font-bold">
                Rohit Sanjay Patil
              </div>
              <div className="bg-[#2B2B2C] text-[#9F9F9F]  md:p-2 p-1  rounded-lg text-center overflow-hidden md:mt-4 text-sm md:mb-4 mt-2">
                Full Stack Developer
              </div>
            </div>
          </div>
          <hr
            className={`${
              show ? "visible" : "hidden"
            } mx-8 md:block mt-4  border-[#383838] border-2 ease-in`}
          />
          <div
            className={`${
              show ? "visible" : "hidden"
            } md:block flex flex-wrap md:flex-col md:gap-2 gap-6 mt-6 mx-6 ease-in duration-300`}
          >
            <div className="flex  gap-4 ">
              <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-2 mb-4 mt-1  rounded-lg text-center overflow-hidden  text-sm ">
                <HiOutlineMail className="inline-block text-2xl text-[#FEC664]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#959595] text-sm">EMAIL</div>
                <div className="text-[#D7D7D7] text-xs">
                  rohitpatil8794@gmail.com
                </div>
              </div>
            </div>

            <div className="flex  gap-4 ">
              <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-lg text-center overflow-hidden  text-sm ">
                <MdPhoneAndroid className="inline-block text-2xl text-[#FEC664]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#959595] text-sm">PHONE</div>
                <div className="text-[#D7D7D7] text-xs">9137144269</div>
              </div>
            </div>

            <div className="flex gap-4 ">
              <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-lg text-center overflow-hidden  text-sm ">
                <a
                  target="_blank"
                  rel="noopener noreferrerk"
                  href="https://drive.google.com/file/d/1Qi8ViwixJmF1HI6qpgQgZs61DbJ1cU6o/view?usp=sharing"
                >
                  <LuStickyNote className="inline-block text-2xl text-[#FEC664]" />
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#959595] text-sm my-2 cursor-pointer underline ">
                  <a
                    target="_blank"
                    rel="noopener noreferrerk"
                    href="https://drive.google.com/file/d/1Qi8ViwixJmF1HI6qpgQgZs61DbJ1cU6o/view?usp=sharing"
                  >
                    {" "}
                    {/* <FiLink className="inline-block text-xl mr-2 text-[#959595]" /> */}
                    RESUME{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr
            className={`${
              show ? "visible" : "hidden"
            } md:block mx-8  mt-4  border-[#383838] border-2 ease-in duration-300`}
          />

          <div
            className={`${
              show ? "visible" : "hidden"
            } md:flex ease-in duration-300 flex justify-center items-center mx-6 mt-4 gap-6`}
          >
            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1 cursor-pointer rounded-full text-center overflow-hidden  text-sm ">
              <a
                target="_blank"
                rel="noopener noreferrerk"
                href="https://github.com/Rohitpatil-123"
              >
                {" "}
                <LuGithub className="inline-block text-2xl text-[#9F9F9F]" />{" "}
              </a>
            </div>

            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <a
                target="_blank"
                rel="noopener noreferrerk"
                href="https://leetcode.com/rohittt_45/"
              >
                <FaCode className="inline-block text-2xl text-[#9F9F9F]" />
              </a>
            </div>

            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <a
                target="_blank"
                rel="noopener noreferrerk"
                href="https://www.linkedin.com/in/rohit-patil-98b920228/"
              >
                <FaLinkedinIn className="inline-block text-2xl text-[#9F9F9F]" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 md:invisible bg-[#2B2B2C] text-[#FFFFFF] px-3   rounded-bl-2xl text-center text-md ">
            <FaAngleDown
              className="inline-block text-md text-[#FEC664]"
              onClick={() => {
                setShow(!show);
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-9/12 bg-[#1E1E1F] md:relative  overflow-hidden  border-[1px] rounded-3xl border-[#383838] md:ml-[26%] md:right-0">
          <div className="md:flex hidden md:gap-8  md:absolute md:right-0 md:bg-[#2B2B2C]  py-5 md:px-6 md:rounded-bl-3xl md:border-l-2 border-[#383838] ">
            <div
              className={`tracking-wide font-[600] cursor-pointer ${
                comp == "about" ? "text-[#FDC764]" : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setComp("about");
              }}
            >
              About
            </div>
            <div
              className={`tracking-wide font-[600] cursor-pointer ${
                comp == "experience" ? "text-[#FDC764]" : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setComp("experience");
              }}
            >
              Experience
            </div>
            <div
              className={`tracking-wide font-[600] cursor-pointer ${
                comp == "projects" ? "text-[#FDC764]" : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setComp("projects");
              }}
            >
              projects
            </div>
            <div
              className={`tracking-wide font-[600] cursor-pointer ${
                comp == "skills" ? "text-[#FDC764]" : "text-[#D6D6D6]"
              }`}
              onClick={() => {
                setComp("skills");
              }}
            >
              Skills
            </div>
            <div
              className={`tracking-wide font-[600] cursor-pointer ${
                comp == "contact" ? "text-[#FDC764]" : "text-[#D6D6D6]"
              }`}
              onClick={() => setComp("contact")}
            >
              Contact Me
            </div>
          </div>
          <div className="p-4">
            {(() => {
              switch (comp) {
                case "about":
                  return <About />;
                  break;
                case "experience":
                  return <Experience />;
                  break;
                case "projects":
                  return <Projects />;
                  break;
                case "skills":
                  return <Skills />;
                  break;
                case "contact":
                  return <Contact />;
                  break;
                default:
                  return <About />;
                  break;
              }
            })()}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 rounded-tl-2xl rounded-tr-2xl md:gap-8 fixed bottom-0 md:hidden  bg-[#2B2B2C] text-sm left-0 w-full bg py-5 md:px-6 ">
        <div
          className="text-[#D6D6D6]  tracking-wide  font-[600] cursor-pointer "
          onClick={() => {
            setComp("about");
          }}
        >
          About
        </div>
        <div
          className="text-[#D6D6D6]  tracking-tight font-[600] cursor-pointer "
          onClick={() => {
            setComp("experience");
          }}
        >
          Experience
        </div>
        <div
          className="text-[#D6D6D6] tracking-tight  font-[600] cursor-pointer "
          onClick={() => {
            setComp("projects");
          }}
        >
          projects
        </div>
        <div
          className="text-[#D6D6D6] tracking-tight  font-[600] cursor-pointer "
          onClick={() => {
            setComp("skills");
          }}
        >
          Skills
        </div>
        <div
          className="text-[#D6D6D6] tracking-tight  font-[600] cursor-pointer "
          onClick={() => {
            setComp("contact");
          }}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
}
