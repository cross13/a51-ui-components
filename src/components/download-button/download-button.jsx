import React from "react";
import { Button } from 'antd';
import noop from 'lodash.noop';

export const Button51 = ({ type, shape, icon, onClickHandler }) =>
  <Button type={type} shape={shape} icon={icon} onClick={onClickHandler}/>;

Button51.defaultProps = {
  type: 'primary',
  shape: 'circle',
  icon: 'download',
  onClickHandler: noop,
};

export default Button51;
