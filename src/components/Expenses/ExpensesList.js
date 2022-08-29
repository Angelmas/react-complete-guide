import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

const ExpensesList = ({ expenses }) => (
  <Card className="expenses-list">
    {expenses.map((expense, index) => (
      <ExpenseItem 
        id={index+1} 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </Card>
)

export default ExpensesList