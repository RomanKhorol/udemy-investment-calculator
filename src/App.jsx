import { useState } from "react";
import { Header } from "./component/Header";
import UserInput from "./component/UserInput";
import Results from "./component/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValidInput = userInput.duration >= 1;
  function setInputsField(identifier, newValue) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput stateWithData={userInput} hendleGhange={setInputsField} />
      {!isValidInput && (
        <p className="center">Please enter a duration wich greater than zero</p>
      )}
      {isValidInput && <Results stateWithData={userInput} />}
    </>
  );
}

export default App;
