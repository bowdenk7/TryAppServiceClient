import { TemplateAction } from '../actions';
import * as constants from '../constants';
import { IStoreState } from '../types';

export function templateReducer(state: IStoreState, action: TemplateAction): IStoreState {
    switch (action.type) {
        case constants.SELECT_TEMPLATE:
            const newTemplates = state.templates.map(x => {
                return {
                    ...x,
                    isSelected: x.name === action.selectedTemplate.name
                };
            });

            return {
                ...state,
                selectedTemplate: { ...action.selectedTemplate },
                templates: newTemplates
            };
    }

    return state;
}