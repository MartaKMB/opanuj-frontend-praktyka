import React, { useState } from 'react';
import { addictionFun, substractionFun, multiplicationFun, divisionFun } from './functions';
import { ButtonComponent } from './ButtonComponent';

const App = () => {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);
  const [resultNum, setResultNum] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>();

  const calculateResult = (func: (a: number, b: number) => number) => {
    setResultNum(func(firstNum, secondNum));
    secondNum === 0 ? setErrorMsg('do not divide by 0') : '';
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
      <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNum}
          onChange={(e) => setFirstNum(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNum}
          onChange={(e) => setSecondNum(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <ButtonComponent handleOnClick={() => calculateResult(addictionFun)} >+</ButtonComponent>
        <ButtonComponent handleOnClick={() => calculateResult(substractionFun)} >-</ButtonComponent>
        <ButtonComponent handleOnClick={() => calculateResult(multiplicationFun)} >*</ButtonComponent>
        <ButtonComponent handleOnClick={() => calculateResult(divisionFun)} >/</ButtonComponent>
      </div>
      <div>Result: {resultNum}</div>
      <p>{errorMsg}</p>
    </div>
  );
};

export default App;
