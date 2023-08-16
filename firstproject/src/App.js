
import './App.css'
import Expenses from './components/Expenses';

function App(){
    // let expenseDate=new Date(2023,3,28);
    // let expenseTittle="Insurance Fees";
    // let expenseAmount=300;

    //making the array of objects
    let expense=[
        {
            id:'e1',
            title:'Insurance Fees',
            amount:200,
            date: new Date(2021,5,24)
        },
        {
            id:'e2',
            title:'Book',
            amount:700,
            date: new Date(2021,8,26)
        },
        {
            id:'e3',
            title:'House Rent',
            amount:2000,
            date: new Date(2020,5,25)
        },
        {
            id:'e4',
            title:'Food',
            amount:2400,
            date: new Date(2023,6,27)
        }
    ]

    return (
            <div>
            <h1 className="heading">Information Generator</h1>
            <Expenses item={expense}/>
            </div>
       
    )
}

export default App;