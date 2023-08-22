import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

const [enterTitle,setEntertitle]=useState('')
const [enterAmount,setEnterAmount]=useState('')
const [enterDate,setEnterDate]=useState('')

const titleChangeHandler=(event)=>{
    setEntertitle(event.target.value);
}

const amountChangeHandler=(event)=>{
    setEnterAmount(event.target.value);
}


const dateChangeHandler=(event)=>{
    setEnterDate(event.target.value);
}

const submitHandler=(event)=>{
    event.preventDefault(); // it will stop the form default refresh nature

    const expenseData={
        title:enterTitle,
        Amount:enterAmount,
        date:new Date(enterDate),
    }

    console.log(expenseData);

  props.onSavedata(expenseData);

    //This is call two way binding
    setEntertitle('');
    setEnterAmount('');
    setEnterDate('')
}


  return (
    <form  onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enterAmount} onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterDate} onChange={dateChangeHandler}/>
        </div>

      </div>

    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>

    </form>
  );
}

export default ExpenseForm;
