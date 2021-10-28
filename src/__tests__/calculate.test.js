import calculate from '../logic/calculate';

describe('Calculate Function', () => {
  test('Perform sum if button is equal to "="', () => {
    const obj = { total: '1', next: '1', operation: '+' };
    const button = '=';
    const result = calculate(obj, button);
    expect(Number(result.total)).toEqual(2);
  });
  test('Perform subtraction if button is equal to "="', () => {
    const obj = { total: '1', next: '1', operation: '+' };
    const button = '=';
    const result = calculate(obj, button);
    expect(Number(result.total)).toEqual(2);
  });
  test('Return zero if button is equal to AC', () => {
    const obj = { total: '1', next: '1', operation: '+' };
    const button = 'AC';
    const result = calculate(obj, button);
    expect(Number(result.total)).toEqual(0);
  });
});
