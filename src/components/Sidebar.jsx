import { logo, folder, scan, personalcard, setting } from "../assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const nav = useNavigate();

  return (
    <div className="w-100 h-dvh p-6 bg-slate-100 flex flex-col justify-between shadow-zinc-800 border-r border-r-purple-500">
      <img
        src={logo}
        alt="logo"
        className="cursor-pointer"
        onClick={() => nav("/")}
      />

      <div className="h-[40%] text-zinc-500 flex flex-col justify-between gap-4">
        <div className="flex justify-start gap-4 items-center">
          <img src={folder} alt="icon" />
          <p className="cursor-pointer" onClick={() => nav("/assessments")}>
            Assessments
          </p>
        </div>

        <div className="flex justify-start gap-4 items-center">
          <img src={scan} alt="icon" />
          <p className="cursor-pointer">Grader</p>
        </div>

        <div className="flex justify-start gap-4 items-center">
          <img src={personalcard} alt="icon" />
          <p className="cursor-pointer" onClick={() => nav("/submissions")}>
            Submissions
          </p>
        </div>

        <div className="flex justify-start gap-4 items-center">
          <img src={setting} alt="icon" />
          <p className="cursor-pointer">Settings</p>
        </div>
      </div>

      <div className="flex flex-col">
        <p>Report Bug</p>
        <p>FAQ</p>
      </div>
    </div>
  );
};

export default Sidebar;
