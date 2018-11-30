import * as React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DownloadButton from './download-button';

storiesOf('Download Button', module)
  .add('Default', () => (
    <DownloadButton onClickHandler={action('Download button clicked')} />
  ))
  .add('Dashed', () => (
    <DownloadButton onClickHandler={action('Download button clicked!!!!!')} type={'dashed'} />
  ));
