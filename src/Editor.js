import React, { Component } from 'react';
import './Editor.scss';

export default class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <div className="edit-box">
          <div className="controls">
            <p>Hi</p>
          </div>
          <textarea className="markdown-input" />
        </div>
      </div>
    );
  }
}
