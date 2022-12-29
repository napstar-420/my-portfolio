import React from "react";
import { FaPaperPlane, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import connectSvg from "../Images/connect_svg.svg";

const Connect = () => {
  return (
    <section className="bg-mainGreen py-16 px-4" id="connect">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-mainBlack">
          Connect with me.
        </h1>
        <div className="grid grid-cols-2 items-center gap-4">
          <p className="text-base font-openSans text-mainBlack font-semibold mt-4 col-start-1 col-end-3 sm:col-end-2">
            Interested to hire me | Got some work for me. Please feel free to
            get in touch with me. I will get back to you as soon as i can.
            Thanks{" "}
          </p>
          <a
            href="mailto:dev.zohaib.work@gmail.com"
            target="_blank"
            className="flex items-center justify-center bg-mainBlack text-white font-poppins font-medium text-xl px-4 py-1 rounded w-full xs:col-end-2 col-start-1 col-end-3"
            rel="noreferrer"
          >
            Send a mail
            <FaPaperPlane className="text-2xl ml-2" />
          </a>
          <img
            src={connectSvg}
            alt="Phone Illustration"
            className="w-[50%] xs:w-[70%] mx-auto  xs:col-start-2 xs:col-end-3 col-start-1 col-end-3 sm:row-start-1 sm:row-end-5 sm:ml-auto sm:mr-0"
          />
          <div className="flex items-center justify-center col-start-1 col-end-3 sm:col-end-2">
            <div className="h-[2px] flex-1 bg-mainBlack rounded" />
            <p className="mx-2 font-poppins">Or visit</p>
            <div className="h-[2px] flex-1 bg-mainBlack rounded" />
          </div>
          <div className="w-full flex items-center justify-center col-start-1 col-end-3 sm:col-end-2">
            <a
              href="https://www.instagram.com/zohaib_billa_420/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border-2 border-mainBlack rounded-full text-mainBlack hover:bg-mainBlack hover:text-white transition-all mx-1"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.facebook.com/khanzohaib97"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border-2 border-mainBlack rounded-full text-mainBlack hover:bg-mainBlack hover:text-white transition-all mx-1"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/napstar-420"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border-2 border-mainBlack rounded-full text-mainBlack hover:bg-mainBlack hover:text-white transition-all mx-1"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/zohaib_billa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 border-2 border-mainBlack rounded-full text-mainBlack hover:bg-mainBlack hover:text-white transition-all mx-1"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
