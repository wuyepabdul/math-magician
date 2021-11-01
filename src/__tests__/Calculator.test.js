import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  afterEach(() => {
    cleanup();
  });
  test('Calculator page render', () => {
    render(<Calculator />);
    const acBtn = screen.getByText('AC');
    const container = screen.getByTestId('calculator-container');
    const display = screen.getByTestId('calculator-display');
    expect(acBtn && container && display).toBeInTheDocument();
    expect(acBtn.classList).toContain('light-grey');
  });
  test('Calculations', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display');
    expect(display.firstChild.textContent).toEqual('0');
    userEvent.click(screen.getByText('7'));
    expect(display.firstChild.textContent).toContain('7 ');
    userEvent.click(screen.getByText('x'));
    expect(display.firstChild.textContent).toContain('7 x');
    userEvent.click(screen.getByText('5'));
    expect(display.firstChild.textContent).toContain('7 x 5');
    userEvent.click(screen.getByText('='));
    expect(display.firstChild.textContent).toContain('35');
    userEvent.click(screen.getByText('AC'));
    expect(display.firstChild.textContent).toEqual('0');
  });
});
