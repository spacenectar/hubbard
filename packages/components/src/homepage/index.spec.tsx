import Homepage from 'homepage'
/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

it('Homepage renders correctly', () => {
  const tree = renderer
    .create(<Homepage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});