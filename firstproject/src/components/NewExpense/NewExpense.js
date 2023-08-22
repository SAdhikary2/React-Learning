import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

  //RECEIVING DATA FROM THE CHILD
 const saveExpenseDataHandler=(enteredData)=>{
    const receiveData={
      ...enteredData,
      id:Math.random().toString()
    }
    props.onaddExpense(receiveData)
    console.log(receiveData);
 }


  return (
    <div className='new-expense'>
      <ExpenseForm onSavedata={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
