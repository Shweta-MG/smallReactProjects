import React from 'react';
import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  
  const clickButton = () => {
    setTitle('Updated!!!')
    setAmount(200)
    console.log('I am clicking')
  }


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickButton}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
