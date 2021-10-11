import React from 'react'

// Import component files
import Authentication from './index'
import docs from './README.md'

// Configure Story
export default {
  title: 'molecule/Authentication',
  component: Authentication,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

// Stories
export const Default: React.FC = () => <Authentication />

