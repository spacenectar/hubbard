/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Welcome from './index'

it('Welcome renders correctly', () => {
  const tree = renderer
    .create(<Welcome status="available" miniMeName="available" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});