import { ISelectableBoxProps } from '../components/SelectableBoxComponent';
import * as constants from '../constants';

export interface ISelectTemplate {
    selectedTemplate: ISelectableBoxProps;
    type: constants.SELECT_TEMPLATE;
}

export type TemplateAction = ISelectTemplate;

export function selectTemplate(selectedTemplate: ISelectableBoxProps): ISelectTemplate {
    return {
        selectedTemplate,
        type: constants.SELECT_TEMPLATE
    };
}