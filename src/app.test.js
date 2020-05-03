import React from 'react';
import { shallow } from 'enzyme';
import App from './app.jsx';

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


/*
import React from 'react';
import { shallow, mount } from 'enzyme';
import Review from './review.jsx';

// describe('Review component', () => {
//   it('accepts review title props', () => {
//     const wrapper = mount(<Review title={'hi'} />);
//     expect(wrapper.props().title).toEqual('hi');
//   });
// });

*/