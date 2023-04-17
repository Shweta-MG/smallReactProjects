import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from './Card';

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
