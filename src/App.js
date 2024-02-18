import React from 'react';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditorComponent';
import MarkdownPreviewer from './components/MarkdownViewer/MarkdownViewerComponent';
import './App.scss';

function App() {

  return (
    <div className="App bg-body-secondary d-flex p-5">
      <div className="col-6 pe-2">
        <MarkdownEditor />
      </div>
      <div className="col-6 ps-2">
        <MarkdownPreviewer />
      </div>
    </div>
  );
}

export default App;
