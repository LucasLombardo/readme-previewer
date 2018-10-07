import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Editor.scss';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '# This is a header\n\nAnd this is a paragraph' };

    this.handleChange = this.handleChange.bind(this);
    this.formatCode = this.formatCode.bind(this);

    this.myRef = React.createRef();
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
    this.props.updateMarkdown(event.target.value);
  }

  formatCode() {
    const { input } = this.state;
    const markdownInput = this.myRef.current;
    const selection = window.getSelection();
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    const newInput = `${input.slice(0, start)}\`${selection}\`${input.slice(
      end,
    )}`;
    this.setState({ input: newInput });
    this.props.updateMarkdown(newInput);
  }

  render() {
    return (
      <div className="Editor">
        <div className="edit-box">
          <div className="controls">
            <button type="button" onClick={this.formatCode}>
              &lt;/&gt;
            </button>
          </div>
          <textarea
            className="markdown-input"
            ref={this.myRef}
            value={this.state.input}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  updateMarkdown: PropTypes.func.isRequired,
};
