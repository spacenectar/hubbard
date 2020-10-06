import React from 'react'

// Import component files
import Homepage from '.'
import docs from './README.md'


export default {
  title: 'Homepage',
  component: Homepage,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Homepage />


