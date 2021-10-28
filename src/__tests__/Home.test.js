import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';

describe('Home', () => {
  afterEach(() => {
    cleanup();
  });

  test('Renders Welcome to our page!', () => {
    render(<Home />);
    const headerElement = screen.getByText(/Welcome to our page!/);
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByRole('heading'));
  });
  test('Renders div tag', () => {
    render(<Home />);
    const element = screen.getByTestId('home-div');
    const pTag = screen.getByTestId('p-tag');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Welcome to our page!');
    expect(element).toContainElement(pTag);
  });
  test('Renders p tags', () => {
    render(<Home />);
    const element = screen.getByTestId('p-tag');
    expect(element).toBeInTheDocument();
    expect(element).toContainHTML('<br />');
    expect(element).not.toContainHTML('<div></div>');
  });
  test('To have classNames', () => {
    render(<Home />);
    const element = screen.getByTestId('home-div');
    const headerElement = screen.getByText(/Welcome to our page!/);
    expect(element).toHaveClass('home');
    expect(headerElement).toHaveClass('home-heading');
  });
});
