import React from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handlesubmit = (e) => {
    console.log(name, email, msg);
    setName("");
    setEmail("");
    setMsg("");
  };
  return (
    <div>
      <motion.div
        className="text-3xl font-[700] tracking-wide md:pt-4 text-[#F8F8F8] px-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Contact Me
      </motion.div>
      <motion.div
        className="ml-2 md:mt-4 mt-2 rounded-md md:p-1 p-0.5 bg-[#FDC764] "
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 50 }}
        transition={{ duration: 0.9 }}
      ></motion.div>
      <motion.h3
        class="mb-1 mt-5 px-2 text-2xl font-semibold text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        Contact form
      </motion.h3>
      <motion.div
        className="flex flex-col w-full mt-8 px-3 min-h-[62vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex md:flex-row flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="p-3 text-white rounded-lg border-2 focus:outline-none focus:border-[#FDC764] md:w-[50%] border-[#383838]  bg-[#1E1E1F]"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-3 text-white rounded-lg border-2 focus:outline-none focus:border-[#FDC764] md:w-[50%] border-[#383838]  bg-[#1E1E1F]"
          />
        </div>
        <div className="md:mt-8 mt-5">
          <textarea
            type="text"
            placeholder="Message"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            className="p-4 min-h-[250px] text-white rounded-lg border-2 focus:outline-none focus:border-[#FDC764] w-[100%] border-[#383838]  bg-[#1E1E1F]"
          />
        </div>
        <div className=" flex md:justify-end mb-10 md:mb-4">
          <button
            className="mt-8 flex gap-2 align-right text-[#FDC764] focus:outline-none focus:border-[#FDC764] border-t-2 border-l-2 border-[#383838] bg-[#1E1E1F] p-3 rounded-lg "
            onClick={handlesubmit}
          >
            <IoIosSend className="font-[700] text-2xl" /> Send Message
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default contact;
