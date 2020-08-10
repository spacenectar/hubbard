import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'; 
import { addReadme, configureReadme } from 'storybook-readme';

const customViewports = {
  iPhoneXR: {
    name: 'iPhone XR',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPhoneXS: {
    name: 'iPhone XS',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhone5: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPadPro: {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  iPad: {
    name: 'iPad (Other)',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '1024px',
    },
  },
  ultrawide: {
    name: 'Ultrawide Desktop',
    styles: {
      width: '1600px',
      height: '1200px',
    },
  },
}

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   */
  StoryPreview: ({ children }) => <div style={{ margin: '2rem 1rem' }}>{children}</div>,
 
  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => (
    <div style={{ backgroundColor: '#fff', padding: '1rem'  }}> {children}</div>
  )
});

addParameters({
  options: {
    showSearchBox: true
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'grey', value: '#ddd' },
  ], 
  readme: {
    info: { inline: true },
    codeTheme: 'atom-dark',
  },
  viewport: { 
    viewports: customViewports 
  }
});

addDecorator(addReadme);