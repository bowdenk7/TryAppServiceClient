import * as React from 'react';
import './SelectableBoxComponent.css';

export interface ISelectableBoxProps {
    iconUrl?: string;
    isSelected?: boolean;
    name?: string;
    onClick?: () => void;
}

export function SelectableBoxComponent(props: ISelectableBoxProps) {
    const selectedClassName = props.isSelected ? "selected" : "";

    return (
        <div className="selectableBox" onClick={props.onClick}>
            <div className={`icon ${selectedClassName}`}>
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