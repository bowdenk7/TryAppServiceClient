import * as constants from '../constants';

export interface ISelectTemplate {
    type: constants.SELECT_TEMPLATE;
}

export type TemplateAction = ISelectTemplate;

export function selectTemplate(): ISelectTemplate {
    return {
        type: constants.SELECT_TEMPLATE
    };
}