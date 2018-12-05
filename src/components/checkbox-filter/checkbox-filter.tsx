import * as React from "react";
import { Checkbox, List } from 'antd';

export interface OptionType {
    label: string;
    value: any;
    checked: boolean
}

export interface CheckboxFilter51Props {
    options: Array<OptionType>,
    onChange?: any,
    name?: string,
    footer?: any
}

const defaultProps = {
};

export class CheckboxFilter51 extends React.Component<CheckboxFilter51Props, {}> {
    constructor(props : CheckboxFilter51Props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    static  defaultProps = defaultProps
    
    onChange(event: any, option: OptionType) {
        this.props.onChange && this.props.onChange(event, option);
    }

    render() {
        const { options, name, footer } = this.props;
        return <div className="CheckboxFilter-Container">
            <List
                size="small"
                header={name && <div className="CheckboxFilter-Header">{name}</div>}
                footer={footer && <div className="CheckboxFilter-Footer">{footer}</div>}
                bordered
                dataSource={options}
                renderItem={(option : OptionType) => (
                    <List.Item>
                        <Checkbox
                            key={`${name}_${option.value}`}
                            checked={option.checked}
                            onChange={(event) => this.onChange(event, option)} >
                                {option.label}
                        </Checkbox>
                </List.Item>)}
            />
        </div>
    }
}

export default CheckboxFilter51;