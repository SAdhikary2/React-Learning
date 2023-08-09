import './ExpenseItem.css';

function ExpenseItem(props){
    // let tittle='Car Insurance'

    return (
        <div className='expense-item'>
            <div className='date'>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.Amount}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;