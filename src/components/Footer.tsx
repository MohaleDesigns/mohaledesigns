import { Flex } from "@mantine/core";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";

function Footer() {
  return (
    <div>
      <div className="container m-auto py-[50px] space-y-[20px]">
        <Flex
          align="center"
          justify="center"
          // gap="40px"
          className="md:flex md:flex-row flex-col gap-[20px] md:gap-[40px]"
        >
          <Flex direction="column" align="center">
            <h4 className="font-poppins font-semibold sm:text-[24px] text-[21px]">
              Email
            </h4>
            <p className="font-poppins font-light sm:text-[16px] text-[13px]">
              mohaledesigns@gmail.com
            </p>
          </Flex>
          <Flex direction="column" align="center">
            <h4 className="font-poppins font-semibold sm:text-[24px] text-[21px]">
              Phone No.
            </h4>
            <p className="font-poppins font-light sm:text-[16px] text-[13px]">
              +27 61 452 5991
            </p>
          </Flex>
          <Flex direction="column" align="center">
            <h4 className="font-poppins font-semibold sm:text-[24px] text-[21px]">
              Location
            </h4>
            <p className="font-poppins font-light sm:text-[16px] text-[13px]">
              Johannesburg, South Africa
            </p>
          </Flex>
        </Flex>
        <Flex align="center" justify="center" gap="sm">
          <IoLogoInstagram color="#cdcdcd" size="20px" />
          <FaFacebookF color="#cdcdcd" size="20px" />
          <PiLinkedinLogo color="#cdcdcd" size="20px" />
        </Flex>
      </div>
      <div className="p-5 border-t border-primary/50 flex items-center justify-center">
        <p className="font-poppins text-white/50 text-[10px] md:text-[13px] text-center">
          2024 Copyright reserved © Mohale Designs.
        </p>
      </div>
    </div>
  );
}

export default Footer;
