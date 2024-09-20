import React from "react";

function PrimaryButton({ label, textSize }) {
  return (
    <button
      className={`bg-primary text-white px-[30px] py-[10px] rounded-[5px] font-poppins font-medium hover:bg-primary/90 transition-all duration-150 delay-150 ease-in-out`}
      style={{ fontSize: textSize }}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
