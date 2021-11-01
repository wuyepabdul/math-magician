import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import CalculatorPage from '../pages/CalculatorPage';

describe('CalculatorPage', () => {
  afterEach(() => {
    cleanup();
  });
  test('Render the calculator page', () => {
    render(<CalculatorPage />);
    const spantText = screen.getByText('Let\'s do some math!');
    expect(spantText).toBeInTheDocument();
  });
  test('snapshot of calculator', () => {
    const calculatorComponent = render(<CalculatorPage />);
    expect(calculatorComponent).toMatchSnapshot();
  });
});
