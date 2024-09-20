import React, { useState } from "react";
import Logo from "../assets/mohaledesigns-ogo.png";
import PrimaryButton from "./PrimaryButton";
import { AiOutlineMenu } from "react-icons/ai";
import { Text, Flex, Modal } from "@mantine/core";
import { SlPresent } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoTag, GoStar } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSquareRemove } from "react-icons/ci";

function Navbar() {
  const [modalOpened, setModalOpened] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* About */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        centered
        size="auto"
        withCloseButton={false}
        transitionProps={{ transition: "rotate-left" }}
        styles={{
          content: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",

            backdropFilter: "blur(10px)",
          },
          body: {
            padding: "70px 95px",
          },
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="40px"
          w="100%"
        >
          <Flex direction="column">
            <Text ta="center" size="38px" fw="400" c="#ffffff]">
              Contact Client
            </Text>
          </Flex>

          <div className="w-[303px] space-y-5">
            <button className="mt-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-[15px] font-bold uppercase text-white transition-all delay-150 duration-300 ease-in-out hover:bg-white hover:text-black">
              Email
            </button>

            <button className="mt-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-[15px] font-bold uppercase text-white transition-all delay-150 duration-300 ease-in-out hover:bg-white hover:text-black">
              Call
            </button>

            <button
              className="mt-2 w-full rounded-lg border border-white bg-black px-4 py-2 text-[15px] font-bold uppercase text-white transition-all delay-150 duration-300 ease-in-out hover:bg-white hover:text-black"
              onClick={() => setModalOpened(false)}
            >
              Telegram
            </button>
          </div>
        </Flex>
      </Modal>

      <div className="relative bg-black/60 py-[30px] z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="logo" width="150px" />
          </a>

          <ul className="list-none items-center gap-5 hidden md:flex">
            <li
              className="text-white font-poppins font-light transition-all duration-150 delay-150 ease-in-out hover:text-primary hover:cursor-pointer"
              onClick={() => setModalOpened(true)}
            >
              About
            </li>
            <li className="text-white font-poppins font-light transition-all duration-150 delay-150 ease-in-out hover:text-primary hover:cursor-pointer">
              Experience
            </li>
            <li>
              <PrimaryButton label="Get In Touch" textSize="13px" />
            </li>
          </ul>

          <div className="md:hidden flex items-center">
            <GiHamburgerMenu
              color="#cdcdcd"
              size="24px"
              className="hover-effect"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col items-center justify-center lg:hidden absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-xl shadow-md p-5 z-50 transition-all delay-150 duration-100 ease-in-out">
          <CiSquareRemove
            className="absolute top-4 right-3 hover-effect hover:text-primary rounded-md float-right"
            style={{ color: "#828282", fontSize: "40px" }}
            onClick={toggleMobileMenu}
          />

          <div className="flex flex-col items-center justify-center">
            <ul className="uppercase font-poppins flex items-center flex-col gap-10 text-sm mt-10">
              <li
                className="text-white font-poppins font-light transition-all duration-150 delay-150 ease-in-out hover:text-primary hover:cursor-pointer"
                onClick={() => setModalOpened(true)}
              >
                About
              </li>
              <li className="text-white font-poppins font-light transition-all duration-150 delay-150 ease-in-out hover:text-primary hover:cursor-pointer">
                Experience
              </li>
            </ul>

            <div className="flex flex-col gap-10 mt-20">
              <div className="flex gap-5 justify-center">
                <IoLogoInstagram
                  className="hover-effect"
                  color="#cdcdcd"
                  size="20px"
                />
                <FaFacebookF
                  className="hover-effect"
                  color="#cdcdcd"
                  size="20px"
                />
                <PiLinkedinLogo
                  className="hover-effect"
                  color="#cdcdcd"
                  size="20px"
                />
              </div>

              <div className="flex flex-col gap-1 items-center">
                <PrimaryButton label="Get In Touch" textSize="13px" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
