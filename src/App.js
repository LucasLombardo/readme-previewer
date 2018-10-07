import React, { Component } from 'react';
import './App.scss';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default App;
