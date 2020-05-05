import React from 'react';
import { shallow, mount } from 'enzyme';
import Review from '../src/review.jsx';

describe('Review component', () => {
  it('accepts review prop', () => {
    const wrapper = mount(<Review review={{product: 'shoe'}} />);
    expect(wrapper.props().review.product).toEqual('shoe');
    wrapper.unmount();
  });
});