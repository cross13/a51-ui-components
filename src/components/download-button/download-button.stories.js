import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DownloadButton from './';

storiesOf('Download Button', module)
  .addDecorator(withInfo)
  .add('Default', () => (
    <DownloadButton onClickHandler={action('Download button clicked')} />
  ))
  .add('Dashed', () => (
    <DownloadButton onClickHandler={action('Download button clicked')} type={'dashed'} />
  ));
