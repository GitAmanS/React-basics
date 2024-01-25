import React from 'react'
import './Expense.css'
const Expense = (props) => {
  return (
    <div className='expense-item'>
        <div className='expense-item-description'>
            <h2>{props.expense}</h2>
            <div className='expense-item-price'>Rs{props.price}</div>
        </div>

    </div>
    
  )
}

export default Expense