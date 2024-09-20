import { Group, Text, Flex, Modal } from "@mantine/core";
import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import Navbar from "./Navbar";
import PrimaryButton from "./PrimaryButton";
import Banner from "../assets/banner.png";

function Header() {
  return (
    <div className="h-screen relative bg-black">
      <Navbar />
      <img
        src={Banner}
        alt="banner"
        className="absolute w-full h-full top-0 left-0 object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center">
        <div className="container m-auto md:grid md:grid-cols-2">
          <div className="space-y-[20px] flex flex-col justify-center items-center md:items-start">
            <Flex direction="column">
              <Text
                c="#ffffff"
                size="100px"
                fw="bold"
                className="font-montserrat text-[40px] sm:text-[60px] md:text-[100px] md:text-left text-center leading-none"
              >
                Full
              </Text>
              <Text
                c="#ffffff"
                size="100px"
                fw="bold"
                className="font-montserrat text-[40px] sm:text-[60px] md:text-[100px] md:text-left text-center leading-none"
              >
                Stack
              </Text>
              <Text
                c="#ffffff"
                size="100px"
                fw="bold"
                className="font-montserrat text-[40px] sm:text-[60px] md:text-[100px] md:text-left text-center leading-none"
              >
                Developer
              </Text>
            </Flex>

            <p className="font-poppins font-light text-white text-[13px] md:text-[18px] md:text-left text-center w-[60%] md:w-full">
              I'm all about using web development to take people's ideas and
              make them a reality, turning a simple idea into a high-end
              marketable solution to meet the client's expectations.
            </p>

            {/* button & socials */}
            <Flex
              align="center"
              gap="sm"
              className="flex flex-col-reverse md:flex-row"
            >
              <PrimaryButton label="Get In Touch" textSize="16px" />

              <Flex align="center" gap="sm">
                <IoLogoInstagram color="#cdcdcd" size="20px" />
                <FaFacebookF color="#cdcdcd" size="20px" />
                <PiLinkedinLogo color="#cdcdcd" size="20px" />
              </Flex>
            </Flex>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
