import React from 'react';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditorComponent';
import MarkdownPreviewer from './components/MarkdownViewer/MarkdownViewerComponent';
import './App.scss';

function App() {

  return (
    <div className="App bg-body-secondary d-flex flex-wrap p-5">
      <div className="col-12 col-lg-6 pe-lg-2 mb-4 mb-lg-0">
        <MarkdownEditor />
      </div>
      <div className="col-12 col-lg-6 ps-lg-2">
        <MarkdownPreviewer />
      </div>
    </div>
  );
}

export default App;
