import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let removeExpense, editExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    history = { push: jest.fn() }
    removeExpense = jest.fn()
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense= {removeExpense} expense={expenses[1]} history={history}/>)
})

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onClick', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')

    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])



})

test('should handle remove', () => {
    wrapper.find('button').prop('onClick')()
    expect(history.push).toHaveBeenLastCalledWith('/')

    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
})