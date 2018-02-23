import { createStore } from 'redux'

//  Action generators

// const incrementCount = (payload = {}) => ({    
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

const incrementCount = ({incrementBy = 1} = {}) => ({    
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const countReducer = (state = { count: 0}, action) => {
    console.log('running')
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            } 
        case 'SET':
            return {
               count: action.count
            }
        default:    
            return state;
    }    
};

const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch({
    type: 'RESET'
})



store.dispatch({
    type: 'SET',
    count: 101
})


