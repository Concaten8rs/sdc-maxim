import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app.jsx';

describe('App component', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });

   it('renders correctly', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
   });

   it('calls componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
   });
});
