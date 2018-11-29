import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DownloadButton from './download-button';

storiesOf('Download Button', module)
  .add('Default',
  withInfo({ inline: true })(() => (
    <DownloadButton onClickHandler={action('Download button clicked')} />
  )),)
  .add('Dashed',
  withInfo({ inline: true })(() => (
    <DownloadButton onClickHandler={action('Download button clicked')} type={'dashed'} />
  )),);
