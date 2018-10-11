import React, { Component } from 'react';
import './App.scss';
// eslint-disable-next-line
import { readMe } from "Assets";
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  state = {
    markdown: readMe,
  };

  updateMarkdown = (str) => {
    this.setState({
      markdown: str,
    });
  };

  render() {
    return (
      <div className="App">
        <Editor updateMarkdown={this.updateMarkdown} />
        <Preview input={this.state.markdown} />
      </div>
    );
  }
}

export default App;
