import * as React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import CheckBoxFilter from './checkbox-filter';
import './checkbox-filter.scss';

const options = [{
    value: 1,
    label: 'label 1',
    checked: false
},{
    value: 2,
    label: 'label 2',
    checked: false
},{
    value: 3,
    label: 'label 3',
    checked: false
},{
    value: 4,
    label: 'label 4',
    checked: true
}];

storiesOf('Checkbox Filter', module)
  .add('Default', withInfo({ inline: true })(() => (
    <CheckBoxFilter options={options} name={'Example 1'}
        onChange={action('checkbox change')} />
  )));
