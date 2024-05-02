/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <div className="flex  bg-[#FFFFFF] items-center justify-end min-h-[80px] p-[20px]">
      <div className="flex items-center gap-2 p-4 justify-between">
        <span className="rounded-full width-[2rem] bg-neutral-800" />

        <div className="flex flex-col items-end justify-between">
          <p>John Abdulsalam Aboyeji</p>
          <p>Lecturer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
