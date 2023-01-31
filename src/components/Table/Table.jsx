import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);
export class Table extends Component {
  render() {
    const { data, columns, onRowClick } = this.props;
    return (
      <table>
        <thead>
          <tr>{columns.map((item) => <th key={item.accessor}>{item.Header }</th>)}</tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              onClick={() => {
                onRowClick(item);
              }}
              key={index}
              className={cx({ pointer: Boolean(onRowClick) })}
            >
              {columns.map((columns, i) => {
                if (columns.Header === 'Email') {
                  return <td key={i}><a href="mailto:">{item[`col${i + 1}`]}</a></td>;
                }
                if (columns.Header === 'Phone') {
                  return <td key={i}><a href="tel:">{item[`col${i + 1}`]}</a></td>;
                }
                return <td key={i}>{item[`col${i + 1}`]}</td>;
              })}
            </tr>
          ))}
        </tbody>
        <tfoot />
      </table>
    );
  }
}
