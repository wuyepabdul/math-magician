import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';

describe('Home', () => {
  test('Displays Welcome to our page!', () => {
    render(<Home />);
    // screen.debug();
    const headerElement = screen.getByText(/Welcome to our page!/);
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByRole('heading'));
  });
});
