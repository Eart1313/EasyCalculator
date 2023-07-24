import { useState } from "react";

function Calculate() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(0);

  const setNum1 = (e) => {
    setInput1(Number(e.target.value));
  };

  const setNum2 = (e) => {
    setInput2(Number(e.target.value));
  };

  const calculateResult = (operator) => {
    if (operator === "+") {
      setResult(input1 + input2);
    } else if (operator === "-") {
      setResult(input1 - input2);
    } else if (operator === "*") {
      setResult(input1 * input2);
    } else if (operator === "/") {
      setResult(input1 / input2);
    } else {
      setResult(0);
    }
  };

  return (
    <>
      <h1>Simple Calculator App</h1>
      <label>
        input1:
        <input type="number" name="input1" value={input1} onChange={setNum1} />
      </label>
      <div>
        <button onClick={() => calculateResult("+")}>+</button>
        <button onClick={() => calculateResult("-")}>-</button>
        <button onClick={() => calculateResult("*")}>*</button>
        <button onClick={() => calculateResult("/")}>/</button>
      </div>
      <label>
        input2:
        <input type="number" name="input2" value={input2} onChange={setNum2} />
      </label>
      <div>
        <button onClick={() => setShowResult(result)}>=</button>
      </div>
      <h2>Result is {showResult}</h2>
    </>
  );
}

export default Calculate;
