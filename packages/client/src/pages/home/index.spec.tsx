/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Home from './index'

it('Home renders correctly', () => {
  const tree = renderer
    .create(<Home name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});