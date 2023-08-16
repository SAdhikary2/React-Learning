import './ExpenseDate.css';

function ExpenseDate(props){
    const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const year=props.date.getFullYear();

    return (
        <div className='date_ele'>
        <div className='Expense-item_day'>{day}</div>
        <div className='Expense-item_month'>{month}</div>
        <div className='Expense-item_year'>{year }</div>
    </div>
    );
}

export default ExpenseDate;