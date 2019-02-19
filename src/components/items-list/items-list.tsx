import * as React from "react";
import { List, Icon } from 'antd';

const classNames = require('classnames');

export interface dataItems {
    title: string;
    description?: string;
}

export interface iconProps {
    color?: string;
    type: string | undefined;
    className?: string;
    theme?: "filled" | "outlined" | "twoTone" | undefined;
}

export interface ItemsListProps {
    classNameList?: string,
    classNameItem?: string,
    header?: string,
    data: Array<dataItems>,
    onClickItem?: any,
    size: "small" | "default" | "large" | undefined,
    footer?: any,
    iconType?: iconProps,
}

const defaultProps = {
    size: 'large',
    iconType:{
        size: 20,
    }
};

export class ItemsList extends React.Component<ItemsListProps, {}> {
    constructor(props : ItemsListProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    static  defaultProps = defaultProps;

    onClick(event: any, item: dataItems) {
        event.preventDefault();
        this.props.onClickItem && this.props.onClickItem(item);
    }

    render() {
        const { classNameList, classNameItem, header, footer, size, data, iconType } = this.props;
        return <div className={classNames("ItemsList-Container",classNameList)}>
            <List
                size={size}
                header={header && <div className="ItemsList-Header">{header}</div>}
                footer={footer && <div className="ItemsList-Footer">{footer}</div>}
                bordered
                dataSource={data}
                renderItem={( item : dataItems ) => (
                    <List.Item className={classNames("ItemsList-item",classNameItem)}>
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                        <a href="#" onClick={e => this.onClick(e, item)}>{iconType &&
                            <Icon
                                className={iconType.className}
                                type={iconType.type}
                                theme={iconType.theme}
                                twoToneColor={iconType.color} />}
                        </a>
                    </List.Item>
                )}
            />
        </div>
    }
}

export default ItemsList;