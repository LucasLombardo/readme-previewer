import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Elements';
import './Editor.scss';

function downloadReadme(text) {
  const pom = document.createElement('a');
  pom.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
  );
  pom.setAttribute('download', 'README.md');
  if (document.createEvent) {
    const event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '# This is a header\n\nAnd this is a paragraph' };

    this.handleChange = this.handleChange.bind(this);
    this.formatCode = this.formatCode.bind(this);

    this.copyMarkdown = this.copyMarkdown.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);

    this.MainTextarea = React.createRef();
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
    this.props.updateMarkdown(event.target.value);
  }

  formatCode() {
    const { input } = this.state;
    const markdownInput = this.MainTextarea.current;
    const selection = window.getSelection();
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    const newInput = `${input.slice(0, start)}\`${selection}\`${input.slice(
      end,
    )}`;
    this.setState({ input: newInput });
    this.props.updateMarkdown(newInput);
  }

  clearMarkdown() {
    this.setState({ input: '' });
    this.props.updateMarkdown('');
  }

  copyMarkdown() {
    this.MainTextarea.current.select();
    document.execCommand('copy');
  }

  render() {
    const { formatCode } = this;
    const BUTTONS = [
      ['H1', formatCode],
      ['H2', formatCode],
      ['H3', formatCode],
      ['H4', formatCode],
      ['H5', formatCode],
      ['H6', formatCode],
      ['bold', formatCode],
      ['italic', formatCode],
      ['quotes', formatCode],
      ['code', formatCode],
      ['hr', formatCode],
      ['link', formatCode],
      ['image', formatCode],
    ];
    return (
      <div className="Editor">
        <div className="edit-box">
          <div className="controls">
            {BUTTONS.map(btn => (
              <button type="button" className="edit-btn" onClick={btn[1]}>
                {btn[0][0] === 'H' ? (
                  <h3>{btn[0]}</h3>
                ) : (
                  <Icon name={btn[0]} color="#d1d5da" />
                )}
              </button>
            ))}
          </div>
          <textarea
            className="markdown-input"
            ref={this.MainTextarea}
            value={this.state.input}
            onChange={this.handleChange}
          />
          <div className="bottom-options">
            <button type="button" onClick={this.clearMarkdown}>
              clear
            </button>
            <button type="button" onClick={this.copyMarkdown}>
              copy
            </button>
            <button
              type="button"
              onClick={() => downloadReadme(this.state.input)}
            >
              save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  updateMarkdown: PropTypes.func.isRequired,
};
