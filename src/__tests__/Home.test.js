import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';

describe('Home', () => {
  afterEach(() => {
    cleanup();
  });

  test('Displays Welcome to our page!', () => {
    render(<Home />);
    screen.debug();
    const headerElement = screen.getByText(/Welcome to our page!/);
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByRole('heading'));
  });
  test('Displays p tag contents', () => {
    render(<Home />);
    const element = screen.getByText(/Welcome to our page!/);
    expect(element).toBeInTheDocument();
    expect(screen.getByRole('heading'));
    console.log(screen);
  });
});
