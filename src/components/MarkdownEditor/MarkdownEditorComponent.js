import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown } from './markdownEditorActions';
import MaximizeButton from '../MaximizeCardButton/MaximizeCardButtonComponent';
import './MarkdownEditorStyle.scss';

const MarkdownEditor = () => {
    const dispatch = useDispatch();
    const markdown = useSelector(state => state.markdownEditor.content); 

    const EDITOR_CARD_ID = "editor-card";

    const isMaximized = useSelector(state => state.maximizeButton.maximizedCard === EDITOR_CARD_ID);

    

    const handleChange = (e) => {
        dispatch(updateMarkdown(e.target.value));
    };

    return (
        <div id={EDITOR_CARD_ID} className={`card ${isMaximized ? 'maximized' : ''}`}>
            <div class="card-header d-flex justify-content-between align-items-center">
                <h2>Editor</h2>
                <MaximizeButton cardName={EDITOR_CARD_ID}/>
            </div>
            <div className="card-body">
                <textarea id="editor" value={markdown} onChange={handleChange} />
            </div>
        </div>
    );
};


export default MarkdownEditor;