import './ExpenseItem.css';

const ExpenseItem = () => {

    const expenseDate = new Date(2021, 3, 3);
    const expenseDescription = 'Car Insrance';
    const expenseAmount = 290.90;



    return (  
    <div className = 'expenseItem'>
        <div > {expenseDate.toISOString()} </div>   
        <div className = 'expenseItemDescription'>
                <h2> {expenseDescription}</h2>
                <div className='expenseItemAmount'>${expenseAmount}</div>
        </div>
    </div>
    );
}
 
export default ExpenseItem;