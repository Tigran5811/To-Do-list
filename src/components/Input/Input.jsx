import React, { Component } from 'react';
import './Input.module.scss';

export class Input extends Component {
  render() {
    const {
      name, onChange, type, placeholder, value,
    } = this.props;
    return (
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
    );
  }
}
