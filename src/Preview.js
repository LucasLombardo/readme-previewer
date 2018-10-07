import React, { Component } from 'react';
import './Preview.scss';
// eslint-disable-next-line
import { Icon } from "Elements";

export default class Preview extends Component {
  render() {
    return (
      <div className="Preview">
        <div className="readme">
          <div className="top-bar">
            <h3>
              <Icon name="book" color="#24292e" />
              README.md
              <Icon name="pencil" color="#586069" />
            </h3>
          </div>
          <div className="body">
            <p>Content here</p>
          </div>
        </div>
      </div>
    );
  }
}
