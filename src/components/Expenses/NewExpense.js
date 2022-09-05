import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmitExpense = (expense) => {
    onAddExpense(expense)
    setIsEditing(false)
  }

  const handleStartEditing = () => {
    setIsEditing(true)
  }

  const handleStopEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && (<button onClick={handleStartEditing}>Add new expense</button>) }
      {isEditing && (<ExpenseForm onSubmitExpense={handleSubmitExpense} onCancel={handleStopEditing} />) }
    </div>
  )
}

export default NewExpense