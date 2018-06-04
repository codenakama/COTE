import React from 'react';
import { storiesOf } from '@storybook/react';
import WidgetBox from './WidgetBox';

storiesOf('WidgetBox', module).add('With subitems', () => (
  <WidgetBox title="Custom title">
    <div> This is a test</div>
  </WidgetBox>
));
