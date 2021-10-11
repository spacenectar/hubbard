/* global it expect */

import React from 'react'
import { render } from '@testing-library/react';

// Import component files
import Authentication from './index'

// Tests
describe('Authentication component', () => {
  it('renders to match snapshot', () => {
    const { baseElement } = render(
      <Authentication name="test" colour="blue" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
