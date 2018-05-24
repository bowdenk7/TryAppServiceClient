import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
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
        onClick: () => dispatch(actions.selectTemplate())
    };
}

export default connect(mapStateToProps, mapDispatchToPros)(TemplatesComponent);