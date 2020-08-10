import React from 'react'

// Import component files
import Button from './index'
import docs from './README.md'


export default {
  title: 'Button',
  component: Button,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const clickAction = (msg: string): void => {
  alert(msg)
}

export const Lozenge: React.FC = () => <Button action={() => clickAction('Clicked lozenge')}>Click me</Button>
export const Link: React.FC = () => <Button action={() => clickAction('Clicked link')} type="link">Click me</Button>

