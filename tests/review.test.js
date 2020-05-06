import React from 'react';
import { shallow, mount } from 'enzyme';
import Review from '../src/review.jsx';

describe('Review component', () => {
  it('accepts review prop', () => {
    const wrapper = mount(<Review review={{
      product: 'pants',
      title: 'hi',
      name: 'a',
      stars: 4,
      verified: true,
      date: new Date(),
      content: 'i dont like',
      comfort: 1,
      style: 1.2,
      value: 5,
      sizing: 'too small',
      photo: 'false',
    }} />);
    expect(wrapper.props().review.product).toEqual('pants');
    wrapper.unmount();
  });
});