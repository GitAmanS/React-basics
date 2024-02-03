import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  async function filterExpenseByYear(year){
    const filteredExpenses = await props.items.filter(expense => expense.date.getFullYear() === parseInt(year));
    console.log(props.items)
    setFilteredExpenses(filteredExpenses);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter filterExpenseByYear={filterExpenseByYear}/>
      {
        filteredExpenses.map((expense)=>{
          return <ExpenseItem
            key={expense.id}
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