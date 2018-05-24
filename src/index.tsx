import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { TemplateAction } from "./actions";
import Templates from "./containers/TemplatesContainer";
import './index.css';
import { templateReducer } from "./reducers/TemplatesReducer";
import { IStoreState } from './types';

const preloadedState = {
    selectedTemplate: "",
    templates: [{
        iconUrl: require("./assets/jsLogo.png"),
        isSelected: false,
        name: "Express"
    }, {
        iconUrl: require("./assets/vueLogo.png"),
        isSelected: false,
        name: "Vue"
    }, {
        iconUrl: require("./assets/reactLogo.png"),
        isSelected: false,
        name: "React"
    }, {
        iconUrl: require("./assets/angularLogo.png"),
        isSelected: false,
        name: "Angular"
    }]
};

const store = createStore<IStoreState, TemplateAction, any, any>(templateReducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <Templates />
    </Provider>,
    document.getElementById('root') as HTMLElement
);