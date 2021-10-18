/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="header">0</div>
        <div className="light-grey">AC</div>
        <div className="light-grey">+/-</div>
        <div className="light-grey">%</div>
        <div className="orange"><span>&#247;</span></div>
        <div className="light-grey">7</div>
        <div className="light-grey">8</div>
        <div className="light-grey">9</div>
        <div className="orange">x</div>
        <div className="light-grey">4</div>
        <div className="light-grey">5</div>
        <div className="light-grey">6</div>
        <div className="orange">-</div>
        <div className="light-grey">3</div>
        <div className="light-grey">2</div>
        <div className="light-grey">1</div>
        <div className="orange">+</div>
        <div className="light-grey zero">0</div>
        <div className="light-grey">.</div>
        <div className="orange">=</div>
      </div>
    );
  }
}
