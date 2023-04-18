import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    return (  
    <Card className='expenseItem'>
        <ExpenseDate date={props.date} /> 
        <div className = 'expenseItemDescription'>
            <h2> {props.description}</h2>
            <div className='expenseItemAmount'>${props.amount}</div>
        </div>
    </Card>
    );
}
 
export default ExpenseItem;
