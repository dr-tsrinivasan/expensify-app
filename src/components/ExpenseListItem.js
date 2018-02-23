import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

export const ExpenseListItem = ({dispatch, id, description, createdAt, amount}) => (
    <div>
        <Link to={`edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>

    </div>
);

export default connect()(ExpenseListItem);