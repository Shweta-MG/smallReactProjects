import React from 'react';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredDesc, setEnteredDesc] = useState('');
    const [enteredAmount, setEnteredAmount ] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const inputListener = (event) => {
        setEnteredDesc(event.target.value);
    }

    const amountListener = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateListener = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitListener = (event) => {
        event.preventDefault();

        const newExpenses = {
            title: enteredDesc,
            amount: enteredAmount,
            date: new Date (enteredDate)
        }

        props.onSaveExpenseData(newExpenses);        
        setEnteredDesc('');
        setEnteredAmount('');
        setEnteredDate('');
    }



    return ( 
        <form onSubmit={submitListener}>
        <div>
            <div>
                <div className='newExpenseControls'>
                    <label htmlFor="description"> Description </label>
                    <input
                        type="text"
                        value={enteredDesc}
                        onChange={inputListener}
                    />
                </div>
                <div className='newExpenseControls'>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountListener}
                    />
                </div>
                <div className='newExpenseControls'>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateListener}
                    />
                </div>
            </div>
            <div className='newExpenseActions'>
                <button type='submit'> Add Expense </button>
            </div>
            </div>                    
        </form>
     );
}
 
export default ExpenseForm;