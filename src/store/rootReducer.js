import { combineReducers } from 'redux';
import maximizeReducer from '../components/MaximizeCardButton/maximizeCardButtonReducer';
import markdownReducer from '../components/MarkdownEditor/markdownEditorReducer';

const rootReducer = combineReducers({
    maximizeButton: maximizeReducer,
    markdownEditor: markdownReducer,
});

export default rootReducer;
