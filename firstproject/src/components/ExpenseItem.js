import React from "react";
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props){
    // let tittle='Car Insurance'
    const [title,setTitle]=useState(props.title)

    const ClickHandler=()=>{
        setTitle("New title")
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.Amount}</div>
            </div>
            <button onClick={ClickHandler}>Change Text</button>
        </div>
    )

}

export default ExpenseItem;