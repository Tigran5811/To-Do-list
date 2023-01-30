import React, { Component } from 'react';
// import styles from './Modal.module.scss';

export class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <thead />
        <tbody>
          {data.map(({
            id, email, website, phone, username,
          }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{email}</td>
              <td>{website}</td>
              <td>{phone}</td>
              <td>{username}</td>
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>
    );
  }
}
