import "./App.css";
import Accordian from "./components/Accordian";

function App() {
  const dummyData = [
    {
      question: "What is your goal?",
      answer: "My goal is to be a better software engineer and earn well.",
    },
    {
      question: "Who do you consider your ideal?",
      answer: "My parents are my ideal",
    },
    {
      question: "Why do you sleep so early?",
      answer: "Because my health consitions are not good.",
    },
  ];

  return (
    <div className="App">
      {dummyData.map((data, index) => {
        return (
          <Accordian
            key={index}
            question={data.question}
            answer={data.answer}
          />
        );
      })}
    </div>
  );
}

export default App;
