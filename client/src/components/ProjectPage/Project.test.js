import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Project from './Project';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(
    <Router initialEntries={['/projects/1']}>
      <Route path="/projects/:id" component={props => <Project {...props} />} />
    </Router>
  );
});

describe('Project component', () => {
  it("does not contain 'previous project' button", () => {
    expect(wrapper.queryByText(/previous project/i)).not.toBeInTheDocument();
  });
  it("displays 'previous project' after clicking on 'next project' button", () => {
    expect(wrapper.queryByText(/previous project/i)).not.toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/next project/i));
    expect(wrapper.queryByText(/previous project/i)).toBeInTheDocument();
});
it("does not display 'next project' when on the last project", () => {
    expect(wrapper.queryByText(/next project/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/next project/i));
    rtl.fireEvent.click(wrapper.queryByText(/next project/i));
    rtl.fireEvent.click(wrapper.queryByText(/next project/i));
    rtl.fireEvent.click(wrapper.queryByText(/next project/i));
    expect(wrapper.queryByText(/next project/i)).not.toBeInTheDocument();
  });
});
