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
            title={expense.name}
            amount={expense.price}
            date={expense.date}
          />
        })
      }
      
      {/* <ExpenseItem
        title={props.items[1].name}
        amount={props.items[1].price}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].name}
        amount={props.items[2].price}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;