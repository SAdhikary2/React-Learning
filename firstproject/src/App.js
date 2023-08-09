import ExpenseItem from "./components/ExpenseItem";
import './App.css'


function App(){
    let expenseDate=new Date(2023,3,28);
    let expenseTittle="Insurance Fees";
    let expenseAmount=300;
    return (
            <div>
            <h1 className="heading">Information Generator</h1>
            <ExpenseItem
            date={expenseDate}
            title={expenseTittle}
            Amount={expenseAmount}>
            </ExpenseItem>
            </div>
       
    )
}

export default App;