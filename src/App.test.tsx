import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

test.skip('Renders <App /> component correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Getting started with React testing library/i);
  expect(linkElement).toBeInTheDocument();
});


describe.skip("<App />", () => {
  it("Renders <App /> component correctly", () => {
    render(<App />);
    expect(screen.getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});