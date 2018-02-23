import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'

import  getVisibleExpenses  from './selectors/expenses'

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
//   })

// const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 400, createdAt: 1000}))
// const expenseTwo = store.dispatch(addExpense({description: 'Electricity Bill', amount: 800, createdAt: -1000}))
// const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 80000, createdAt: 5000}))

// store.dispatch(setTextFilter('water'))

// setTimeout (() => {
//     store.dispatch(setTextFilter('Rent'))
// }, 3000)

// console.log(store.getState())

const jsx = (
    <Provider  store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'));

