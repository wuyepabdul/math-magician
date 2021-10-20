/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const runCalculator = (btn) => {
    const newObj = calculate(state, btn);
    setState(newObj);
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
  const generateBtnClass = (className) => {
    if (className === '÷' || className === 'x' || className === '-'
    || className === '+' || className === '=') {
      return 'orange';
    } if (className === '0') { return 'light-grey zero'; }
    return 'light-grey';
  };

  return (
    <div className="calculator">
      <div className="header">{displayResult() }</div>
      {buttons.map((btn) => (
        <div key={btn} className={generateBtnClass(btn)} onClick={() => runCalculator(btn)}>
          {' '}
          {btn}
          {' '}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
