// import { PDFViewer } from "@react-pdf/renderer";
// import RDocument from "./RDocument";
import { useMutationState } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
const Details = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [clicked, setClicked] = useState(-1);

  const data = useMutationState({
    filters: "gradeData",
    select: (mutation) => mutation.state?.data?.data,
  });

  let _markingGuide = "",
    _question = "",
    _score = "",
    _explanation = "",
    _feedback = "",
    _onlineAnswers = "";

  if (data?.length) {
    const {
      data: { gradingReponse, markingGuide, question, onlineAnswers },
    } = data[0];

    _markingGuide = markingGuide;
    _question = question;
    _onlineAnswers = onlineAnswers;

    if (gradingReponse?.length) {
      const { score, explanation, feedback } = gradingReponse.map(({ value }) =>
        JSON.parse(value)
      )[id];
      _score = score;
      _explanation = explanation;
      _feedback = feedback;
    }
  }

  return (
    <div className="w-100 h-dvh flex flex-col gap-4 p-8">
      <Button primary onClick={() => nav("..")} className="w-[10%] self-start">
        Go back
      </Button>

      <div className="w-full h-full flex gap-4 justify-between overflow-hidden">
        <div
          className={`${
            clicked == -1 ? "w-2/12" : clicked == 0 ? "w-8/12" : "w-2/12"
          } h-100 text-stone-500 border flex flex-col gap-4 p-4 overflow-y-scroll cursor-pointer`}
          onClick={() => setClicked(0)}
        >
          <p className="text-xl">Question</p>
          <p>{_question}</p>
        </div>

        <div
          className={`${
            clicked == -1 ? "w-5/12" : clicked == 1 ? "w-8/12" : "w-2/12"
          } h-100 text-stone-500 border flex flex-col gap-4 p-4 bg-slate-100 overflow-y-scroll cursor-pointer`}
          onClick={() => setClicked(1)}
        >
          <p className="text-xl">Marking guide</p>
          {_markingGuide}
        </div>

        <div
          className={`${
            clicked == -1 ? "w-5/12" : clicked == 2 ? "w-8/12" : "w-2/12"
          } h-100 text-stone-500 border flex flex-col gap-4 p-4 overflow-y-scroll cursor-pointer`}
          onClick={() => setClicked(2)}
        >
          <div>
            <p className="text-xl">Score</p>
            {_score}
          </div>

          <div>
            <p className="text-xl">Explanation</p>
            {_explanation}
          </div>

          <div>
            <p className="text-xl">Feedback</p>
            {_feedback}
          </div>

          <div>
            <p className="text-xl">Online Answers</p>
            {_onlineAnswers}
          </div>
        </div>
      </div>

      <Button primary onClick={() => nav("..")} className="w-[10%] self-end">
        Approve
      </Button>
    </div>
  );
};

export default Details;
