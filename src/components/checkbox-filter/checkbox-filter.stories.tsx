import * as React from "react";
import { storiesOf } from '@storybook/react';

import { withInfo } from "@storybook/addon-info";
import CheckBoxFilter from './checkbox-filter';

const options = [{
    value: 1,
    label: 'label 1'
},{
    value: 2,
    label: 'label 2'
},{
    value: 3,
    label: 'label 3'
},{
    value: 4,
    label: 'label 4'
}];

storiesOf('Checkbox Filter', module)
  .add('Default', withInfo({ inline: true })(() => (
    <CheckBoxFilter options={options} name={'Example 1'} />
  )));
