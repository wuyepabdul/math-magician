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
    const result = operate('11', '3', '%');
    expect(result).toBe('2');
  });
  test('Can not divide by 0', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe('Can\'t divide by 0.');
  });
  test('Return 0 for any number dividing 0', () => {
    const result = operate('0', '7', '÷');
    expect(result).toBe('0');
  });
});
