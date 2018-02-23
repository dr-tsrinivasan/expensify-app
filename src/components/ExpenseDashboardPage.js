import React from 'react'
import ReactDOM from 'react-dom'

import ExpenseList from './ExpenseList'
import ExpenseListFilters  from './ExpenseListFilters'



const ExpenseDashboardPage =  () => (
    <div>
        This is from my dashboard component
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage; 