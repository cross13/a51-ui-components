import * as React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import ItemsList from './items-list';
import './items-list.scss';

const data = [
    {title: 'Racing car sprays burning fuel into crowd.'},
    {title: 'Japanese princess to wed commoner.'},
    {title: 'Australian walks 100km after outback crash.'},
    {title: 'Man charged over missing wedding girl.'},
    {title: 'Los Angeles battles huge wildfires.'},
];

const iconProps = {
    color: '2C90FC',
    type: 'edit',
    className: 'icon'
};

storiesOf('Items list', module)
  .add('Default', withInfo({ inline: true })(() => (
    <ItemsList header={'List Example'} data={data} size="small"
               onClickItem={action('items change')} iconType={iconProps} footer={<div className="ItemsList-Footer">Luks se la manya</div>}/>
  )));
