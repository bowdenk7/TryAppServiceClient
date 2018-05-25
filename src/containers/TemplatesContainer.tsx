import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import { ISelectableBoxProps } from '../components/SelectableBoxComponent';
import TemplatesComponent from '../components/TemplatesComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState) {
    return {
        selectedTemplate: state.selectedTemplate,
        templates: state.templates
    };
}

function mapDispatchToPros(dispatch: Dispatch<actions.TemplateAction>) {
    return {
        onClick: (selectedTemplate: ISelectableBoxProps) => dispatch(actions.selectTemplate(selectedTemplate))
    };
}

export default connect(mapStateToProps, mapDispatchToPros)(TemplatesComponent);