import React, { Component } from 'react';
import './App.scss';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  state = {
    markdown: '# This is a header\n\nAnd this is a paragraph',
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
