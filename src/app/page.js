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
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full my-4 mx-6 md:my-12 md:w-10/12 flex flex-col md:flex-row gap-4">
        <div className="w-full  md:w-3/12 bg-[#1E1E1F]  border-2 rounded-3xl border-[#383838] relative">
          <div className="my-2 mx-4  flex md:gap-2 gap-4 md:flex-col md:justify-center md:items-center">
            <div className="bg-[#383839] w-20 h-20 md:w-36 md:h-36 rounded-3xl overflow-hidden my-auto md:mt-10">
              <Image src={Rohit} alt="Rohit" />
            </div>
            <div className="flex flex-col justify-center md:items-center ">
              <div className="md:text-2xl text-xl tracking-wide md:mt-4 text-[#FAFAFA] font-bold">
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
                <LuStickyNote className="inline-block text-2xl text-[#FEC664]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#959595] text-sm my-2 cursor-pointer">
                  <a href=""> RESUME </a>
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
            } md:block  ease-in duration-300 flex justify-center items-center mx-6 mt-4 gap-6`}
          >
            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1 cursor-pointer rounded-full text-center overflow-hidden  text-sm ">
              <a href="https://github.com/Rohitpatil-123">
                {" "}
                <LuGithub className="inline-block text-2xl text-[#9F9F9F]" />{" "}
              </a>
            </div>

            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <a href="https://leetcode.com/rohittt_45/">
                <FaCode className="inline-block text-2xl text-[#9F9F9F]" />
              </a>
            </div>

            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <FaLinkedinIn className="inline-block text-2xl text-[#9F9F9F]" />
            </div>
          </div>
          <div className="absolute -top-0.5 right-0.5 md:invisible bg-[#2B2B2C] text-[#FFFFFF] p-2 -z-2 mb-4 mt-1  rounded-3xl text-center overflow-hidden  text-sm ">
            <FaAngleDown
              className="inline-block text-md text-[#FEC664]"
              onClick={() => {
                setShow(!show);
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-9/12 bg-[#1E1E1F] md:relative  overflow-hidden  border-2 rounded-3xl border-[#383838]">
          <div className="md:flex hidden md:gap-8  md:absolute md:right-0 md:bg-[#2B2B2C]  py-5 md:px-6 md:rounded-bl-3xl md:border-l-2 border-[#383838]">
            <div className="text-[#D6D6D6]  tracking-wide  font-[600] cursor-pointer ">
              About
            </div>
            <div className="text-[#D6D6D6]  tracking-wide font-[600] cursor-pointer ">
              Experience
            </div>
            <div className="text-[#D6D6D6] tracking-wide  font-[600] cursor-pointer ">
              projects
            </div>
            <div className="text-[#D6D6D6] tracking-wide  font-[600] cursor-pointer ">
              Skills
            </div>
            <div className="text-[#D6D6D6] tracking-wide  font-[600] cursor-pointer ">
              Contact Me
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:px-8 md:py-12 px-4 py-4">
            <div className="text-[#D6D6D6] text-2xl font-bold tracking-wide">
              About Me
            </div>
            <div className="text-[#D6D6D6] text-sm font-medium tracking-wide mt-2">
              I am a full stack developer with 1 year of experience in
              developing web applications using MERN stack. I am passionate
              about building scalable and responsive web applications.
            </div>
            <div className="text-[#D6D6D6] text-sm font-medium tracking-wide mt-2">
              I am a quick learner and always eager to learn new technologies.
            </div>
            <div className="text-[#D6D6D6] text-sm font-medium tracking-wide mt-2">
              I am currently looking for a full time opportunity as a full stack
              developer. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 md:gap-8 fixed bottom-0 md:hidden md:bg-[#2B2B2C] bg-gradient-to-r from-yellow-600  to-[#2B2B2C] left-0 w-full bg py-5 md:px-6 ">
        <div className="text-[#D6D6D6]  tracking-wide  font-[600] cursor-pointer ">
          About
        </div>
        <div className="text-[#D6D6D6]  tracking-wide font-[600] cursor-pointer ">
          Experience
        </div>
        <div className="text-[#D6D6D6] tracking-wide  font-[600] cursor-pointer ">
          projects
        </div>
        <div className="text-[#D6D6D6] tracking-wide  font-[600] cursor-pointer ">
          Skills
        </div>
        <div className="text-[#D6D6D6] tracking-wide  font-[600] cursor-pointer ">
          Contact Me
        </div>
      </div>
    </div>
  );
}
