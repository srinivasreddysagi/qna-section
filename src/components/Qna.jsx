import React from "react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

function Qna({question, answer}) {
  const [show, setShow] = useState(false);
  return (
    <article className="qna">
      <div
        className="question"
        onClick={() => {
          setShow(!show);
        }}
      >
        {question} <RiArrowDownSLine className={show ? "icon show" : "icon hide"} />
      </div>
      <p className={show ? "answer show" : "answer hide"}>{answer}</p>
    </article>
  );
}

export default Qna;
