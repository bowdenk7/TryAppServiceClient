import * as React from 'react';
import { ISelectableBoxProps, SelectableBoxComponent } from './SelectableBoxComponent';
import './TemplatesComponent.css';

export interface ITemplatesProps {
    templates?: ISelectableBoxProps[];
    selectedTemplate?: string;
    onClick?: (selectedName?: ISelectableBoxProps) => void;
}

export default function TemplatesComponent({ templates, onClick }: ITemplatesProps) {
    return (
        <div className="templates">
            <h2>Select a template and create your Web App</h2>
            <ul>
                {templates!.map((v) =>
                    <li key={v.name}>
                        <SelectableBoxComponent
                            name={v.name}
                            isSelected={v.isSelected}
                            iconUrl={v.iconUrl}
                            // tslint:disable-next-line:jsx-no-lambda
                            onClick={() => onClick!(v)} />
                    </li>
                )}
            </ul>
            <div className="actions">
                <button type="button">Continue</button>
            </div>
        </div>
    )
}