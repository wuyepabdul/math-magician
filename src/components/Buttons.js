import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ runCalculator, displayResult, handleKeyDown }) => {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const generateBtnClass = (className) => {
    if (
      className === '÷'
      || className === 'x'
      || className === '-'
      || className === '+'
      || className === '='
    ) {
      return 'orange';
    }
    if (className === '0') {
      return 'light-grey zero';
    }
    return 'light-grey';
  };
  return (
    <div data-testid="calculator-container" className="calculator">
      <div data-testid="calculator-display" className="header">
        {displayResult()}
      </div>
      {buttons.map((btn) => (
        <button
          type="button"
          key={btn}
          className={generateBtnClass(btn)}
          onClick={() => runCalculator(btn)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleKeyDown(btn);
          }}
        >
          {' '}
          {btn}
          {' '}
        </button>
      ))}
    </div>
  );
};

Buttons.propTypes = {
  runCalculator: PropTypes.func.isRequired,
  displayResult: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default Buttons;
