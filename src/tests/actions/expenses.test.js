import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
} )

test('should set up edit expense action object', () => {
    const action = editExpense('abc123', {note: 'Change value'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'Change value'
        }
    })

})

test('should set up add action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 10990,
        createdAt: 1000,
        note: 'This was last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    })
})

test('should set up add action oject for default values', () => {
    const expenseData = {      
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
});