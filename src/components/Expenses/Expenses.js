import React, { useState } from 'react'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2020')

  const filterByYear = (year) => {
    setSelectedYear(year)
  }

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)

  return (
    <Card className="expenses">
      <ExpensesFilter 
        onChangeFilter={filterByYear}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
