import React, { Component } from 'react';
import './Editor.scss';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '# This is a header\n\nAnd this is a paragraph' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
    this.props.updateMarkdown(this.state.input);
  }

  render() {
    return (
      <div className="Editor">
        <div className="edit-box">
          <div className="controls">
            <p>Hi</p>
          </div>
          <textarea
            className="markdown-input"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
