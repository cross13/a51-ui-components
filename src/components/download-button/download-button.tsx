import React from "react";
import { Button } from 'antd';
import noop from 'lodash.noop';

export interface Button51Props { type: string; shape: string; icon: string; };

// 'Button51Props' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<Button51Props, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

export const Button51 = ({ type, shape, icon, onClickHandler }) =>
  <Button type={type} shape={shape} icon={icon} onClick={onClickHandler}/>;

Button51.defaultProps = {
  type: 'primary',
  shape: 'circle',
  icon: 'download',
  onClickHandler: noop,
};

// https://medium.com/@martin_hotell/react-typescript-and-defaultprops-dilemma-ca7f81c661c7

export default Button51;
