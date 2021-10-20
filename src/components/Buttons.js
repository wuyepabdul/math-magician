/* eslint-disable react/prop-types */
import React from 'react';

const Buttons = ({
  runCalculator, displayResult, handleKeyDown,
}) => {
  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

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
        <button
          type="button"
          key={btn}
          className={generateBtnClass(btn)}
          onClick={() => runCalculator(btn)}
          onKeyDown={(e) => { if (e.key === 'Enter')handleKeyDown(btn); }}
        >
          {' '}
          {btn}
          {' '}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
