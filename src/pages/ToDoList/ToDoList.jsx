import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../ui-kit/components/Button/Button';
import { Input } from '../../ui-kit/components/Input/Input';
import styles from './ToDoList.module.scss';

const cx = classNames.bind(styles);

export class ToDoList extends Component {
  state = {
    text: '',
    isRender: null,
    toDoList: [],
    checked: true,
  };

  componentDidMount() {
    this.setState({ toDoList: JSON.parse(localStorage.getItem('toDoList')) || [] });
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onRemoveList = (e) => {
    e.stopPropagation();
    const { value } = e.target.attributes[1];
    const { toDoList } = this.state;
    const i = toDoList.findIndex((item) => item === value);
    toDoList.splice(i, 1);
    this.setState({ toDoList });
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  };

  onAddToDoList = () => {
    const { text, toDoList } = this.state;
    const foundText = toDoList.find((item) => text === item);
    if (!foundText) {
      toDoList.push(text);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      this.setState({ toDoList, text: '' });
      return this.setState({ isRender: true });
    }
    return null;
  };

  // onChecked = (e) => {
  //   const { Checked } = this.state;
  //   const toDoList = JSON.parse(localStorage.getItem('toDoList'));
  //   const result = toDoList.find(() => {
  //     if (e.target.checked === true) {
  //       return this.setState({ isChecked: !Checked });
  //     }

  //     return this.setState({ isChecked: Checked });
  //   });
  // };

  // onCheckedTo = () => {
  //   const { checked } = this.state;
  //   this.setState({ checked: !checked });
  // };

  render() {
    const {
      text, toDoList, checked,
    } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>My To Do List</h1>
          <div>
            <Input value={text} onChange={this.onChange} placeholder="Title..." type="text" name="todolist" />
            <Button disabled={!text} onClick={this.onAddToDoList} text="Add" />
          </div>
        </div>
        <div className={styles.todolist}>
          {toDoList && toDoList.map((item, index) => (
            <div key={index} defaultChecked={checked} type="checkbox" className={cx('todolistCont', { checked })} role="button" onClick={this.onChecked}>
              {item}
              <Button onClick={this.onRemoveList} text="X" token={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
