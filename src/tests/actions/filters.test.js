import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)

    })
})

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate setText action object for provided text', () => {
    const action = setTextFilter('some Filter')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'some Filter'
    })
})

test('should generate setText action object for default text', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sortByDate action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
