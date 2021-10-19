/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const iterator = 0;
    const btnClass = (className) => {
      // ;
      if (className === '÷' || className === 'x' || className === '-' || className === '+' || className === '=') {
        return 'orange';
      } if (className === '0') { return 'light-grey zero'; }
      return 'light-grey';
    };
    return (
      <div className="calculator">
        <div className="header">0</div>
        {buttons.map((btn) => (
          <div key={iterator + 1} className={btnClass(btn)}>
            {' '}
            {btn}
            {' '}
          </div>
        ))}
      </div>
    );
  }
}
