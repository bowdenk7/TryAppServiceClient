import { ISelectableBoxProps } from '../components/SelectableBoxComponent';

export interface IStoreState {
    templates: ISelectableBoxProps[];
    selectedTemplate: string;
}