import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const runCalculator = (btn) => {
    const newObj = calculate(state, btn);
    setState(newObj);
  };

  const handleKeyDown = (btn) => {
    runCalculator(btn);
  };

  const displayResult = () => {
    const { next, total, operation } = state;
    const op = operation === '%' ? 'mod' : operation;
    let result = '';
    if (total) {
      result = `${total} ${op || ''} ${next || ''}`;
      return result;
    } if (next) {
      result = `${next} ${op || ''}`;
      return result;
    }
    return 0;
  };

  return (
    <>
      <Buttons
        displayResult={displayResult}
        runCalculator={runCalculator}
        handleKeyDown={handleKeyDown}
      />
    </>
  );
};

export default Calculator;
