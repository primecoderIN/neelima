import "./Accordian.css";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const Accordian = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="accordianWrapper">
      <div className="accordianHeader">
        <h1>{question}</h1>
        <button
          className="toggleButton"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </button>
      </div>
      {showAnswer && (
        <div
          className={`${
            showAnswer
              ? "accordianBody accordianBodyMax"
              : "accordianBody accordianBodyZero"
          }`}
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
