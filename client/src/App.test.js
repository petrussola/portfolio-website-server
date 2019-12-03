import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter as Router } from 'react-router-dom';
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

describe('App component', () => {
  it('renders without crashing', () => {
    expect(wrapper.queryByText(/Pere Sola Claver/i)).toBeInTheDocument();
  });
  it('matches the snapshot', () => {
    expect(wrapper.container).toMatchSnapshot();
  });
  it('Renders projects when clicking on the project link in nav bar', () => {
    expect(wrapper.queryByText(/Next project/i)).not.toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/projects/i));
    expect(wrapper.queryByText(/Next project/i)).toBeInTheDocument();
  });
  it('renders nav bar when loading app', () => {
    expect(wrapper.queryByText(/home/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/projects/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/about/i)).toBeInTheDocument();
  });
  it('renders footer when loading app', () => {
    expect(wrapper.queryByText(/submit/i)).toBeInTheDocument();
  });
  it('renders 2 items with contact text, in nav bar and footer', () => {
    expect(wrapper.queryAllByText(/contact/i)).toHaveLength(2);
  });
  it('renders about component when clicking on the about tab', () => {
    expect(wrapper.queryByText(/2 cents about me/i)).not.toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/about/i));
    expect(wrapper.queryByText(/2 cents about me/i)).toBeInTheDocument();
  });
  it('renders contact page when clicking on contact link in nav bar', () => {
    expect(wrapper.queryByText(/Twitter/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/Linkedin/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/github/i)).not.toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryAllByText(/contact/i)[0]);
    expect(wrapper.queryByText(/Twitter/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/linkedin/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/github/i)).toBeInTheDocument();
  });
});
