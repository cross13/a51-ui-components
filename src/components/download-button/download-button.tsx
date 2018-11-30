import * as React from "react";
import { Button } from 'antd';
import noop from 'lodash.noop';

export interface Button51Props {
    type?: "ghost" | "default" | "primary" | "dashed" | "danger" | undefined;
    shape?: "circle" | "circle-outline" | undefined;
    onClickHandler: any;
    icon?: string;
}

const defaultProps = {
    type: 'primary',
    shape: 'circle',
    icon: 'download',
    onClickHandler: noop,
};

export class Button51 extends React.Component<Button51Props, {}> {
    static  defaultProps = defaultProps

    render() {
        const { type, shape, icon, onClickHandler } = this.props;
        return <Button type={type} shape={shape} icon={icon} onClick={onClickHandler}/>;
    }
}

export default Button51;
