import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {
  static defaultProps = {
    color: 'black',
  };

  render() {
    const { name, color } = this.props;
    switch (name) {
      case 'book':
        return (
          <svg viewBox="0 0 16 16" width="16px" height="16px" fill={color}>
            <path
              fillRule="evenodd"
              d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
            />
          </svg>
        );
      case 'pencil':
        return (
          <svg viewBox="0 0 14 16" width="14" height="16" fill={color}>
            <path
              fillRule="evenodd"
              d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
            />
          </svg>
        );
      case 'bold':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        );
      case 'italic':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
          </svg>
        );
      case 'link':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
          </svg>
        );
      case 'image':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        );
      case 'quotes':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        );
      case 'hr':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path d="M19 13H5v-2h14v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        );
      case 'code':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        );
      default:
        return <div />;
    }
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};
