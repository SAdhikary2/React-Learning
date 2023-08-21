import React from "react";
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props){
  

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



//FIRST FUNCTION COPY WHERE USESTATE HAS BEEN USED

// function ExpenseItem(props){
//     // let tittle='Car Insurance'
//     const [title,setTitle]=useState(props.title)

//     const[InputValue,NewInputValue]=useState("")

//     const ClickHandler=()=>{
//         setTitle(InputValue)
//     }

//     const ChangeHandler=(event)=>{
//         NewInputValue(event.target.value)
//     }

//     return (
//         <div className='expense-item'>
//             <ExpenseDate date={props.date}/>
//             <div className='expense-item__description'>
//                 <h2>{title}</h2>
//                 <div className='expense-item__price'>{props.Amount}</div>
//             </div>
//             <input type="text" value={InputValue}  onChange={ChangeHandler} />
//             <button onClick={ClickHandler}>Change Text</button>
//         </div>
//     )

// }









export default ExpenseItem;