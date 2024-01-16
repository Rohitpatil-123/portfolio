import React from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const notify = () => toast.success("Thank you for contacting");
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_2hcfxk5",
        "template_w8m4rbs",
        formData,
        "ZTrJhdKiGfDbcWtul"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          notify();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setFormData({ name: "", email: "", message: "" });
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
        className="mb-1 mt-5 px-2 text-2xl font-semibold text-gray-900 dark:text-white"
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 text-white rounded-lg border-2 focus:outline-none focus:border-[#FDC764] md:w-[50%] border-[#383838]  bg-[#1E1E1F]"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 text-white rounded-lg border-2 focus:outline-none focus:border-[#FDC764] md:w-[50%] border-[#383838]  bg-[#1E1E1F]"
          />
        </div>
        <div className="md:mt-8 mt-5">
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 min-h-[250px] text-white rounded-lg border-2 focus:outline-none focus:border-[#FDC764] w-[100%] border-[#383838]  bg-[#1E1E1F]"
          />
        </div>
        <div className=" flex md:justify-end mb-10 md:mb-4">
          <button
            className="mt-8 flex gap-2 align-right text-[#FDC764] focus:outline-none focus:border-[#FDC764] border-t-2 border-l-2 border-[#383838] bg-[#1E1E1F] p-3 rounded-lg "
            onClick={submitHandler}
          >
            <IoIosSend className="font-[700] text-2xl" /> Send Message
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default contact;
