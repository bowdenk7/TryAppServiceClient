import * as React from 'react';

export interface ISelectableBoxProps {
    iconUrl?: string;
    isSelected?: boolean;
    name?: string;
}

export function SelectableBoxComponent(props: ISelectableBoxProps) {
    return (
        <div className="selectableBox">
            <div className="icon">
                <div className="selection">
                    <img src={require('../assets/selectedCheckMark.png')} width="20" /> {/* TODO: Remove width*/}
                </div>
                <img src={props.iconUrl} width="100" /> {/* TODO: Remove width*/}
            </div>
            <div className="description">
                <span>{props.name}</span>
            </div>
        </div>
    );

}