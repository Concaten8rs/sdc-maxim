import React from 'react';
import { shallow, mount } from 'enzyme';
import Review from './review.jsx';

describe('Review component', () => {
  it('accepts review title props', () => {
    const wrapper = mount(<Review title={'hi'} />);
    expect(wrapper.props().title).toEqual('hi');
    wrapper.unmount();
  });
});