import React, { useState } from "react";
import './App.css'
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";


const Dummy_Expense=[
    // {
    //     id:'e1',
    //     title:'Insurance Fees',
    //     amount:200,
    //     date: new Date(2021,5,24)
    // },
    // {
    //     id:'e2',
    //     title:'Book',
    //     amount:700,
    //     date: new Date(2021,8,26)
    // },
    // {
    //     id:'e3',
    //     title:'House Rent',
    //     amount:2000,
    //     date: new Date(2020,5,25)
    // },
    // {
    //     id:'e4',
    //     title:'Food',
    //     amount:2400,
    //     date: new Date(2023,6,27)
    // }

]


function App(){

  
    const [expense,setExpense]=useState(Dummy_Expense);

    fetch('https://techgun.website/sample/api/read.php').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            //console.log(data);
            setExpense(data);
        }
    );



    const addDataHandler=(expenses)=>{
        const updatedExpense=[expenses,...expense]
        setExpense(updatedExpense);
    }

    return (
            <div>
            <h1 className="heading">Expense Tracker</h1>
            <NewExpense onaddExpense={addDataHandler}/>
            <Expenses item={expense}/>
            </div>
    )
}

export default App;