import React from 'react'
import { storiesOf } from '@storybook/react'
import SampleComponent from './index'

storiesOf('Component', module).add('Sample', () => (
  <SampleComponent text="Sample" />
))
