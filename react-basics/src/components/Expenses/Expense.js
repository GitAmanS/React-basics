import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {
        props.items.map((expense)=>{
          return <ExpenseItem
            id={expense.id}
            title={expense.name}
            amount={expense.price}
            date={expense.date}
            deleteExpense={props.deleteExpense}
          />
        })
      }
      

    </Card>
  );
}

export default Expenses;