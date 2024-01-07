import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneAndroid } from "react-icons/md";
import { LuStickyNote } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full my-4 mx-6 md:my-12 md:w-9/12 flex flex-col md:flex-row gap-4">
        <div className="w-full  md:w-3/12 bg-[#1E1E1F]  border-2 rounded-3xl border-[#383838]">
          <div className="my-2 mx-4  flex md:gap-2 gap-6 md:flex-col md:justify-center md:items-center">
            <div className="bg-[#383839] w-24 h-24 md:w-36 md:h-36 rounded-3xl overflow-hidden md:mt-10 md:mb-4 ">
              img
            </div>
            <div className="flex flex-col justify-center md:items-center">
              <div className="md:text-2xl text-xl tracking-wide  text-[#FAFAFA] font-bold">
                Rohit Sanjay Patil
              </div>
              <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1  rounded-lg text-center overflow-hidden mt-4 text-sm mb-4 ">
                Full Stack Developer
              </div>
            </div>
          </div>
          <hr className="mx-8  mt-4  border-[#383838] border-2" />
          <div className="flex flex-wrap md:flex-col md:gap-2 gap-6 mt-6 mx-6">
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
          <hr className="mx-8  mt-4  border-[#383838] border-2" />

          <div className="flex justify-center items-center mx-6 mt-4 gap-6">
            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <LuGithub className="inline-block text-2xl text-[#9F9F9F]" />
            </div>

            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <FaCode className="inline-block text-2xl text-[#9F9F9F]" />
            </div>

            <div className="bg-[#2B2B2C] text-[#FFFFFF] md:p-2 p-1 mb-4 mt-1  rounded-full text-center overflow-hidden  text-sm ">
              <FaLinkedinIn className="inline-block text-2xl text-[#9F9F9F]" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-9/12 bg-[#1E1E1F]  border-2 rounded-lg border-[#383838]">
          cndj
        </div>
      </div>
    </div>
  );
}
