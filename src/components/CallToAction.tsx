import { Text } from "@mantine/core";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import CTA from "../assets/call-to-action.png";

function CallToAction() {
  return (
    <div className="p-10 relative md:rounded-md md:border md:border-primary/80 md:w-[80%] lg:w-[60%] w-[100%] mx-auto mt-10 mb-0 md:my-20">
      <img
        src={CTA}
        alt="call to action"
        className="absolute w-full h-full top-0 left-0 object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center gap-5">
        <Text
          c="#ffffff"
          // size="50px"
          fw="bold"
          ta="center"
          className="font-montserrat md:text-[50px] text-[40px]"
        >
          Helping Businesses Grow Online.
        </Text>

        <PrimaryButton label="Get In Touch" textSize="16px" />
      </div>
    </div>
  );
}

export default CallToAction;
