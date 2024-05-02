import Header from "@components/header";
import Sidebar from "../components/Sidebar";

export default function Grader() {
  return (
    
    <div className="w-100 flex">
    <div className="w-2/12">
      <Sidebar />
    </div>
      <Header />
      <main className=" bg-[#f9f9f9] w-[calc(100vw-265px)] flex flex-col gap-[35px] h-[100vh] p-[35px]">
        <p className="text-black text-[32.86px] font-medium leading-[39.43px]">
          Grader
        </p>

      </main>
      </div>
  );
}

