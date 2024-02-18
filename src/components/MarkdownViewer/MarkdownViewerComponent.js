import React from 'react';
import { useSelector } from 'react-redux';
import { marked } from 'marked';
import MaximizeButton from '../MaximizeCardButton/MaximizeCardButtonComponent';
import './MarkdownViewerStyle.scss';

const MarkdownPreviewer = () => {
    const markdown = useSelector(state => state.markdownEditor.content);

    const PREVIEW_CARD_ID = "preview-card";

    const isMaximized = useSelector(state => state.maximizeButton.maximizedCard === PREVIEW_CARD_ID);

    const getMarkdownText = () => {
        const rawMarkup = marked.parse(markdown, { breaks: true });
        return { __html: rawMarkup };
    };

    return (
        <div id={PREVIEW_CARD_ID} className={`card ${isMaximized ? 'maximized' : ''}`}>
            <div class="card-header d-flex justify-content-between align-items-center">
                <h2>HTML</h2>
                <MaximizeButton cardName={PREVIEW_CARD_ID}/>
            </div>
            <div className="card-body">
                <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
            </div>
        </div>
        
    );
};

export default MarkdownPreviewer;