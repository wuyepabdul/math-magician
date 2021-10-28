import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quote', () => {
  afterEach(() => {
    cleanup();
  });
  test('Render the calculator page', () => {
    render(<Quote />);
    const container = screen.getByTestId('quote-container');
    expect(container).toBeInTheDocument();
    expect(container.firstChild.textContent).toEqual('Mathematics is not about numbers, equations, computations or algorithms: it is about understanding - William Paul Thurston');
  });
  test('snapshot of quotepage', () => {
    const calculatorComponent = render(<Quote />);
    expect(calculatorComponent).toMatchSnapshot();
  });
});
