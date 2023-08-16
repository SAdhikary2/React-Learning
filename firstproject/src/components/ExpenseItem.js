import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    // let tittle='Car Insurance'


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.Amount}</div>
            </div>
        </div>
    )

}

export default ExpenseItem;