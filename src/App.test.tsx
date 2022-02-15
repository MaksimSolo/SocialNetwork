import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';
import {store} from "./redux/store";

test.skip('Renders <App /> component correctly', () => {
  render(<App store={store} state={store.getState()}/>);
  const linkElement = screen.getByText(/Getting started with React testing library/i);
  expect(linkElement).toBeInTheDocument();
});


describe.skip("<App />", () => {
  it("Renders <App /> component correctly", () => {
    render(<App store={store} state={store.getState()}/>);
    expect(screen.getByText(/Getting started with React testing library/i)).toBeInTheDocument();
  });
});