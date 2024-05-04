import { useNavigate } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const Landing = () => {
  const nav = useNavigate();

  return (
    <div className="h-[90dvh] flex flex-col justify-center items-center gap-16">
      <div className="py-10 px-14 flex flex-col justify-between items-center relative">
        <p className="rounded-3xl py-4 px-8 bg-white border border-sky-600 text-sky-600 self-end z-0 absolute top-0 right-0">
          Get more efficient
        </p>
        <div className="rounded-full flex justify-center items-center bg-gradient-to-tr from-sky-500 to-stone-50 border p-8 w-[20rem] h-[20rem] z-10">
          <p className="text-white font-extrabold text-9xl not-italic">G</p>
        </div>
        <p className="text-white rounded-3xl py-4 px-8 bg-gradient-to-l from-purple-300 to-neutral-300 border border-stone-100 self-end z-0 absolute bottom-14 -left-10">
          Save Time
        </p>
        <p className="text-white rounded-3xl py-4 px-8 bg-sky-600 self-end z-0 absolute bottom-0 right-0">
          Grade faster with Gradr
        </p>
      </div>

      <Button
        inverted
        primary
        icon
        labelPosition="right"
        size="huge"
        onClick={() => nav("assessments")}
      >
        Try it out
        <Icon name="right arrow" />
      </Button>
    </div>
  );
};

export default Landing;
