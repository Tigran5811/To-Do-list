import React, { Component } from 'react';
// import styles from './Modal.module.scss';

export class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <thead />
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>
    );
  }
}
