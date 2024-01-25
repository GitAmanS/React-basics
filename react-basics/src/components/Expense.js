import React from 'react'
import './Expense.css'
const Expense = (props) => {
  return (
    <div className='expense-item'>
        <div className='expense-item-description'>
            <h2>{props.expense.name}</h2>
            <h2>{props.expense.date.toLocaleString()}</h2>

            <div className='expense-item-price'>Rs{props.expense.price}</div>
        </div>

    </div>
    
  )
}

export default Expense