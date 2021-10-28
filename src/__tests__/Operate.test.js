// import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import operate from '../logic/operate';

describe('Operate Function', () => {
  test('Perform multiplication operation', () => {
    const result = operate('4', '2', 'x');
    expect(result).toBe('8');
  });
  test('Perform Sum operation', () => {
    const result = operate('4', '2', '+');
    expect(result).toBe('6');
  });
  test('Perform Subtraction operation', () => {
    const result = operate('4', '2', '-');
    expect(result).toBe('2');
  });
  test('Perform Division operation', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });
  test('Perform modulus operation', () => {
    // const obj = { total: '11', next: '3', operation: '%' };
    const result = operate('11', '3', '%');
    expect(result).toBe('2');
  });
});
