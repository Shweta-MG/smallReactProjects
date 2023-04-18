import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseData = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toFixed(2).toString()
        }
        props.onAddExpene(expenseData);
    }

    return (  
    <div className='newExpense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseData}/>
    </div>

    );
}
 
export default NewExpense;