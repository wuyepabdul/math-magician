import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('AppRouting and Navbar', () => {
  afterEach(() => {
    cleanup();
  });
  test('Calculator page render', () => {
    render(<App />);
  });
});
