import React from 'react';
const ExpenseForm = () => {
    return ( 
        <div>
            <div>
                <div className='newExpenseControls'>
                    <label htmlFor="description"> Description </label>
                    <input type="text" />
                </div>
                <div className='newExpenseControls'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount"  min='0.01' step='0.01' />
                </div>
                <div className='newExpenseControls'>
                    <label htmlFor="date">Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='newExpenseActions'>
                <button type='submit'> Add Expense </button>
            </div>
        </div>
     );
}
 
export default ExpenseForm;