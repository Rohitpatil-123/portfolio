import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GrView } from "react-icons/gr";
import { useState } from "react";
import { MdLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import Ecom from "../media/ecom.png";
import Youtub from "../media/youtube.png";
import News from "../media/news.png";
import Resume from "../media/resum.png";
import Voi from "../media/voice.jpg";
import Vcare from "../media/vcare.png";
import Chat from "../media/chat.png";

const projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    codelink: "",
    link: "",
    tech: [],
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const data = [
    {
      id: 1,
      title: "TechCart",
      imagen: Ecom,
      description:
        "Developed E-commerce platform integrated secure payment through Razorpay for seamless online transactions.Created a user-friendly e-commerce application with Admin Panel, while enhancing functionality through Express,Node.js.Integrated user authentication via JWT(Json Web Token). ",
      link: "https://rcom.onrender.com/",
      codelink: "https://github.com/Rohitpatil-123/e-com-frontend",
      tech: ["React", "Node", "MongoDB", "Express", "JWT", "Razorpay"],
    },
    {
      id: 2,
      title: "VCare",
      imagen: Vcare,
      description:
        "Electronic Health Record System , Build using MERN Stack, used JWT for Authentication and Firebase Storage for File Uploading. Doctors and Patients can register, patients can store their medical records, doctors can view patients medical history",
      link: "https://vcare.onrender.com/",
      codelink:
        "https://github.com/Error404-5-0/Electronic-health-record-frontend",
      tech: ["React", "Node", "MongoDB", "Express", "JWT", "Firebase"],
    },
    {
      id: 3,
      title: "chat-app",
      imagen: Chat,
      description:
        "Realtime chat application using socket.io and React. used react hooks and Redux for state management. used jwt for authentication.",
      link: "",
      codelink: "https://github.com/Rohitpatil-123/R-chat-frontend",
      tech: [
        "React",
        "Node",
        "MongoDB",
        "Express",
        "Redux",
        "JWT",
        "Socket.io",
      ],
    },
    {
      id: 4,
      title: "MediaVue",
      imagen: Youtub,
      description:
        "Built a responsive YouTube clone using React and Material-UI, featuring dynamic content from RapidAPI integration.Developed user-friendly interface for video streaming, showcasing UI/UX design skills.Leveraged React and Material-UI to create an engaging YouTube clone with real-time content",
      link: "https://youtube-clone-sable-eight.vercel.app/",
      codelink: "https://github.com/Rohitpatil-123/Youtube_clone",
      tech: ["React", "Node", "MongoDB", "Express", "Rapid Api"],
    },

    {
      id: 5,
      title: "News Mania",
      imagen: News,
      description:
        "Built a responsive News app using React and Material-UI, featuring dynamic content from NewsApi integration.Developed user-friendly interface for news, showcasing UI/UX design skills.Leveraged React and Material-UI to create an engaging News app with real-time content",
      link: "https://newsmenia.netlify.app/",
      codelink: "https://github.com/Rohitpatil-123/NewsMania",
      tech: ["React", "Material-UI", "NewsApi"],
    },
    {
      id: 6,
      title: "Resume.io",
      imagen: Resume,
      description:
        "Built a responsive Resume builder using React and Material-UI, featuring dynamic content from ResumeApi integration.Developed user-friendly interface for Resume, showcasing UI/UX design skills.Leveraged React and Material-UI to create an engaging Resume builder with real-time content",
      link: "https://resume-builer.netlify.app",
      codelink: "https://github.com/Rohitpatil-123/Resume.io",
      tech: ["React", "Material-UI", "ResumeApi"],
    },
    {
      id: 7,
      title: "Voice Assistant",
      imagen: Voi,
      description:
        "Built a responsive Voice Assistant using java swing and FreeTTS, featuring dynamic content from FreeTTS integration.Developed user-friendly interface for Voice Assistant, showcasing UI/UX design skills.Leveraged java swing and FreeTTS to create an engaging Voice Assistant with real-time content",
      link: "",
      codelink: "https://github.com/Rohitpatil-123/voiceassistant",
      tech: ["Java", "FreeTTS"],
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <motion.div
        className="text-3xl font-[700] tracking-wide md:pt-4 text-[#F8F8F8] px-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.99 }}
      >
        Projects
      </motion.div>
      <motion.div
        className="ml-2 md:mt-4 mt-2 rounded-md md:p-1 p-0.5 bg-[#FDC764] "
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 50 }}
        transition={{ duration: 0.9 }}
      ></motion.div>
      <motion.ul
        className="container flex  w-full flex-wrap gap-8 mb-8 md:mt-10 mt-6 px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.map((index) => (
          <motion.div
            key={index}
            className="item md:w-[30%] w-[100%] "
            variants={item}
          >
            <motion.li className="group h-[180px] bg-[#383839] cursor-pointer  transition-all duration-75 ease-in rounded-3xl  overflow-hidden my-auto relative">
              <Image
                src={index.imagen}
                alt="Rohit"
                className="w-full h-[100%] object-cover rounded-2xl group "
              />
              <div className=" hidden group-hover:block absolute bottom-0 left-0 w-full h-full bg-[#2c2c305f]">
                <div className="flex justify-center items-center h-full w-full">
                  <button className=" px-2 py-2 rounded-md bg-[#383839]">
                    <GrView
                      className="inline-block text-2xl text-[#FDC764]"
                      onClick={() => {
                        setModalData({
                          title: index.title,
                          description: index.description,
                          link: index.link,
                          codelink: index.codelink,
                          tech: index.tech,
                          imagen: index.imagen,
                        });
                        openModal();
                      }}
                    />
                  </button>
                </div>
              </div>
            </motion.li>
            <div className="text-[#D6D6D6] text-center mt-2">{index.title}</div>
          </motion.div>
        ))}
      </motion.ul>
      {isModalOpen ? (
        <div
          className={`fixed inset-0 flex items-center justify-center ${
            isModalOpen ? "" : "hidden"
          }`}
        >
          <div
            className="fixed inset-0 bg-black opacity-80"
            onClick={closeModal}
          ></div>
          <div className="bg-[#1E1E1F] relative border-2 border-[#383838] w-[45%] px-10 py-6 rounded-3xl z-10">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-2xl text-[#D6D6D6] "
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="">
              <div className="text-2xl font-[700] tracking-wide text-[#FAFAFA]">
                {modalData.title}
              </div>
              <div className="text-[#D6D6D6] text-sm mt-2 leading-6">
                {modalData.description}
              </div>
              <div className="flex gap-4 mt-2">
                <div className="text-[#D6D6D6] text-sm mb-2 p-2 w-fit rounded-lg bg-[#d6d6d627]">
                  <a
                    href={modalData.link}
                    target="_blank"
                    rel="noopener noreferrerk"
                    className="flex gap-2"
                  >
                    <MdLiveTv className="text-lg" /> Live demo
                  </a>
                </div>
                <div className="text-[#D6D6D6] text-sm mb-2 p-2 w-fit rounded-lg bg-[#d6d6d627]">
                  <a
                    href={modalData.codelink}
                    target="_blank"
                    rel="noopener noreferrerk"
                    className="flex gap-2"
                  >
                    <FaCode className="text-lg" />
                    Github code
                  </a>
                </div>
              </div>

              <div className="text-2xl my-3 text-[#D6D6D6]">
                Technologies Used
              </div>
              <div className="text-[#D6D6D6] text-sm mt-2 ">
                {modalData.tech.map((index) => (
                  <span className="mr-2 bg-[#FDC764] text-black px-2 py-1 rounded-sm">
                    {index}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default projects;
