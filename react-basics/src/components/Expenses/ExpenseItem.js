import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [price, setPrice] = useState(props.amount)
  function changePrice(){
    setPrice(100)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
      <button onClick={()=>{props.deleteExpense(props.key)}}>Delete</button>
      <button onClick={changePrice}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;