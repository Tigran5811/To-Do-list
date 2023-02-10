import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../ui-kit/components/Button/Button';
import { Input } from '../../ui-kit/components/Input/Input';
import styles from './ToDoList.module.scss';

const cx = classNames.bind(styles);

export const ToDoList = () => {
  const [text, setText] = useState('');
  const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem('toDoList')) || []);

  useEffect(() => {
    setToDoList(toDoList);
  }, toDoList);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onRemoveList = (e) => {
    e.stopPropagation();
    const i = toDoList.findIndex((item) => item);
    toDoList.splice(i, 1);
    setToDoList(toDoList);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  };

  const onAddToDoList = () => {
    const foundText = toDoList.find((item) => text === item);
    if (!foundText) {
      toDoList.push(text);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      setText('');
      return setToDoList(toDoList);
    }
    return null;
  };
  // const onChecked = (e) => {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>My To Do List</h1>
        <div>
          <Input value={text} onChange={onChange} placeholder="Title..." type="text" name="text" />
          <Button disabled={!text} onClick={onAddToDoList} text="Add" />
        </div>
      </div>
      <div className={styles.todolist}>
        {toDoList && toDoList.map((item, index) => (
          <div key={index} type="checkbox" className={cx('todolistCont', {})} role="button">
            {item}
            <Button onClick={onRemoveList} text="X" />
          </div>
        ))}
      </div>
    </div>
  );
};
