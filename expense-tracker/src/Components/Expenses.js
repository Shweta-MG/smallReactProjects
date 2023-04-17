import './Expenses.css';
import ExpenseItem from './Components/ExpenseItem';

const Expenses = () => {
    const expenses = [
        {
          id: 'e1',
          description: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        {
          id: 'e2',
          description: 'New TV',
          amount: 799.49,
          date: new Date(2021, 2, 12)
        },
        {
          id: 'e3',
          description: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          description: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
    

    return (  
        <div>
        <ExpenseItem
          description={expenses[0].description}
          amount={expenses[0].amount}
          date={expenses[0].date} />
        
        <ExpenseItem
          description={expenses[1].description}
          amount={expenses[1].amount}
          date={expenses[1].date} />
        
        <ExpenseItem
          description={expenses[2].description}
          amount={expenses[2].amount}
          date={expenses[2].date} />
        
        <ExpenseItem
          description={expenses[3].description}
          amount={expenses[3].amount}
          date={expenses[3].date} />
      
      </div>
    );
    
}
 
export default Expenses;