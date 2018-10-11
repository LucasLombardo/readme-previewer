import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Icon, readMe } from "Assets";
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

function findLineBreak(str, index) {
  // finds the index of the first linebreak to the left of index
  const leftStr = str.slice(0, index);
  for (let i = leftStr.length; i > 0; i--) {
    if (leftStr[i] === '\n') return i;
  }
  return 0;
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { input: readMe };

    this.handleChange = this.handleChange.bind(this);
    this.wrapText = this.wrapText.bind(this);
    this.insertLeft = this.insertLeft.bind(this);
    this.insertEnd = this.insertEnd.bind(this);

    this.copyMarkdown = this.copyMarkdown.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);

    this.MainTextarea = React.createRef();
  }

  handleChange(event) {
    console.log(this.state.input);
    console.log(event.target.value);
    this.setState({ input: event.target.value });
    this.props.updateMarkdown(event.target.value);
  }

  insertLeft(str) {
    // inserts a string to the first place in selected line
    const { input } = this.state;
    const markdownInput = this.MainTextarea.current;
    const start = markdownInput.selectionStart;
    const lineBreak = findLineBreak(input, start) + 1;
    const newInput = input.slice(0, lineBreak) + str + input.slice(lineBreak);
    this.setState({ input: newInput });
    this.props.updateMarkdown(newInput);
  }

  insertEnd(str) {
    // inserts a string at the end of a selection
    const { input } = this.state;
    const markdownInput = this.MainTextarea.current;
    const end = markdownInput.selectionEnd;
    const newInput = input.slice(0, end) + str + input.slice(end);
    this.setState({ input: newInput });
    this.props.updateMarkdown(newInput);
  }

  wrapText(str) {
    // takes a string and wraps selected input text in it
    const { input } = this.state;
    let selection = window.getSelection();
    const markdownInput = this.MainTextarea.current;
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    if (end - start === 0) selection = '';
    const newInput = input
      .slice(0, start)
      .concat(str, selection, str, input.slice(end));
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
    const { wrapText, insertLeft, insertEnd } = this;
    const BUTTONS = [
      ['H1', insertLeft, '# '],
      ['H2', insertLeft, '## '],
      ['H3', insertLeft, '### '],
      ['H4', insertLeft, '#### '],
      ['H5', insertLeft, '##### '],
      ['H6', insertLeft, '###### '],
      ['bold', wrapText, '**'],
      ['italic', wrapText, '*'],
      ['strikethrough', wrapText, '~~'],
      ['quotes', insertLeft, '> '],
      ['code', wrapText, '`'],
      ['link', insertEnd, '[link title](url)'],
      ['image', insertEnd, '![alt text](url "img title")'],
    ];
    return (
      <div className="Editor">
        <div className="edit-box">
          <div className="controls">
            {BUTTONS.map(btn => (
              <button
                type="button"
                className="edit-btn"
                key={btn[0]}
                onClick={() => btn[1](btn[2])}
              >
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
            id="editor"
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
