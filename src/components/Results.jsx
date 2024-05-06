import { PDFViewer } from "@react-pdf/renderer";
import { useMutationState } from "@tanstack/react-query";
import RDocument from "./RDocument";

const Results = () => {
  const data = useMutationState({
    filters: "gradeData",
    select: (mutation) => mutation.state?.data?.data,
  });

  console.log("data: ", data);

  const {
    data: { gradingReponse, markingGuide, question },
  } = data[0];

  return (
    <div className="w-100 h-screen flex gap-4 justify-between p-8">
      <div className="w-4/12 h-[70%] text-stone-500 border p-4 flex flex-col gap-4 overflow-y-scroll">
        <p className="text-xl">Question</p>
        <p>{question}</p>
        <PDFViewer>
          <RDocument content={question} />
        </PDFViewer>
      </div>

      <div className="w-4/12 h-[70%] text-stone-500 border p-4 flex flex-col gap-4 bg-slate-100 overflow-y-scroll">
        <p className="text-xl">Marking guide</p>
        <p>{markingGuide}</p>
        <PDFViewer>
          <RDocument content={markingGuide} />
        </PDFViewer>
      </div>

      <div className="w-4/12 h-[70%] text-stone-500 border p-4 flex flex-col gap-4 overflow-y-scroll">
        <p className="text-xl">Grading Response</p>
        {gradingReponse.map(({ value }, id) => (
          <p key={id}>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default Results;
