import React from 'react'
import moment from 'moment'
import { withKnobs, number } from '@storybook/addon-knobs'

// Import component files
import Welcome from './index'
import docs from './README.md'


export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const label = 'Current hour (24h)';
const defaultValue = parseInt(moment().format('HH'));
const options = {
   range: true,
   min: 0,
   max: 23,
   step: 1,
};
 
export const Available: React.FC = () => <Welcome status="available" nextDate="25/12/20" miniMeName="available" hour={number(label, defaultValue, options)} />
export const Unavailable: React.FC = () => <Welcome status="unavailable" nextDate="25/12/20" miniMeName="at-desk" miniMeWidth="wide" hour={number(label, defaultValue, options)}/>
export const UnavailableNoReturnDate: React.FC = () => <Welcome status="unavailable" miniMeName="at-desk" hour={number(label, defaultValue, options)}/>
export const OnHoliday: React.FC = () => <Welcome status="holiday" nextDate="25/12/20" miniMeName="beach" hour={number(label, defaultValue, options)} />

