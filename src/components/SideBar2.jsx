/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "@/components/svg/logo";
import AssessmentLogo from "../svg/assessmentIcon";
import GraderIcon from "../svg/graderIcon";
import PermissionIcon from "../svg/permissionIcon";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const nav = useNavigate();
    const [active, setActive] = useState(1);
  return (
    <div className="w-[265px] pt-[24px] p-[32px] bg-white  flex-col flex gap-[58px] font-Matter fixed h-[100vh]">
      <Logo />
      <div className="flex flex-col gap-[32px]">
        <div
          onClick={() => {
            setActive(1);
            nav("/assessments");
          }}
          className="flex gap-[8px] cursor-pointer hover:bg-[#f9f9f9] p-2"
        >
          <AssessmentLogo active={ active === 1 ? true : false}/>
          <p className={active === 1 ? "text-[#000000]" : "text-[gray] font-Matter font-semibold"}>Assesments</p>
        </div>
        <div
          onClick={() => {
            setActive(2);
            nav("/grader");
          }}
          className="flex gap-[8px] cursor-pointer hover:bg-[#f9f9f9] p-2 "
        >
          <GraderIcon active={ active === 2 ? true : false}/>
          <p className={active === 2 ? "text-[#000000]" : "text-[gray] font-Matter font-semibold"}>Grader</p>
        </div>
        <div
          onClick={() => {
            setActive(3);
            nav("/submissions");
          }}
          className="flex gap-[8px] cursor-pointer hover:bg-[#f9f9f9] p-2"
        >
          <PermissionIcon active={ active === 3 ? true : false}/>
          <p className={active === 3 ? "text-[#000000]" : "text-[gray] font-Matter font-semibold"}>Submissions</p>
        </div>
      </div>
    </div>
  );
}
