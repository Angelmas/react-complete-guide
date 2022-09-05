import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ onSubmitExpense, onCancel }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleChange = ({ target: { name, value }}) => {
    if (name === 'title') return setTitle(value)
    if (name === 'amount') return setAmount(value)
    if (name === 'date') return setDate(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitExpense({ title, amount: +amount, date: new Date(date), id: Math.random().toString() })
  }

  return <form onSubmit={handleSubmit}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} value={title} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" name="amount" min="0.01" step="0.01" onChange={handleChange} value={amount} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" name="date" onChange={handleChange} value={date} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm
