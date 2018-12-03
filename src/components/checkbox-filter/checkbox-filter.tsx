import * as React from "react";
import { Checkbox } from 'antd';

interface Option {
    label: string;
    value: any;
}

export interface CheckboxFilter51Props {
    options: Array<Option>,
    onChange?: React.ChangeEvent<HTMLInputElement>,
    name: string
}

const defaultProps = {
};

export class CheckboxFilter51 extends React.Component<CheckboxFilter51Props, {}> {
    static  defaultProps = defaultProps

    onChange(event: any, option: Option) {
        console.log(event, option);
    }

    render() {
        const { options, name } = this.props;
        return options.map(option => <Checkbox
            key={`${name}_${option.value}`}
            onChange={(event) => this.onChange(event, option)} >
                {option.label}
        </Checkbox>);
    }
}

export default CheckboxFilter51;