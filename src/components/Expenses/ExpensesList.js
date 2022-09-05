import React from 'react'
import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (<h2 className='expenses-list__fallback'>No expenses found</h2>)
  }

  if (expenses.length > 0) {
    return (
      <ul className='expenses-list'>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    )
  }
}

export default ExpensesList
