import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe('AppRouting and Navbar', () => {
  afterEach(() => {
    cleanup();
  });
  test('navbar is loaded and contains elements', () => {
    render(<App />);
    const navBar = screen.getByTestId('navbar');
    expect(navBar).toBeInTheDocument();
    expect(navBar.firstChild.textContent).toBe(' Math Magicians ');
    const navElements = navBar.childNodes[1];
    expect(navElements.classList).toContain('nav-links');
    expect(navElements.childNodes.length).toEqual(3);
    expect(navElements.childNodes[1].textContent).toEqual('Calculator');
  });
  test('home default', () => {
    render(<App />);
    const homeDefault = screen.getByTestId('home-div');
    expect(homeDefault).toBeInTheDocument();
    expect(homeDefault.firstChild.textContent).toEqual('Welcome to our page!');
  });
  test('snapshot of Whole APP Js page', () => {
    const mainAppComponent = render(<App />);
    expect(mainAppComponent).toMatchSnapshot();
  });
});
