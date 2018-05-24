import { TemplateAction } from '../actions';
import * as constants from '../constants';
import { IStoreState } from '../types';

export function templateReducer(state: IStoreState, action: TemplateAction): IStoreState {
    switch (action.type) {
        case constants.SELECT_TEMPLATE:
            // tslint:disable-next-line:no-console
            console.log('template selected');
            return { ...state, selectedTemplate: state.selectedTemplate };
    }

    return state;
}