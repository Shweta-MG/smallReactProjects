import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: 'long' });
    const day = props.date.toLocaleString("en-US", { day: '2-digit' });
    const year = props.date.getFullYear()

    return (  
    <div className='expenseDate'>
        <div className='expenseDateMonth'>{month}</div>
        <div className='expenseDateDay'>{day}</div>
        <div className='expenseDateYear'>{year}</div>
    </div>  
        
    );
}
 
export default ExpenseDate;
