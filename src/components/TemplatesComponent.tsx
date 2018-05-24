import * as React from 'react';
import { ISelectableBoxProps, SelectableBoxComponent } from './SelectableBoxComponent';
import './TemplatesComponent.css';

export interface ITemplatesProps {
    templates?: ISelectableBoxProps[];
    selectedTemplate?: string;
    onClick?: () => void;
}

export default function TemplatesComponent({ templates, selectedTemplate = "", onClick }: ITemplatesProps) {
    return (
        <div className="templates">
            <h2>Select a template and create your Web App</h2>
            <ul>
                {templates && templates.map((v) =>
                    <li key={v.name} onClick={onClick}>
                        <SelectableBoxComponent name={v.name} isSelected={v.isSelected} iconUrl={v.iconUrl} />
                    </li>
                )}
            </ul>
            <button type="button">Continue</button>
        </div>
    )
}