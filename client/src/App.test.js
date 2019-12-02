import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter  as Router } from 'react-router-dom';
import App from './App';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Router>
      <App />
    </Router>
  );
});

it('renders without crashing', () => {
  expect(wrapper.queryByText(/Pere Sola Claver/i)).toBeInTheDocument();
});
