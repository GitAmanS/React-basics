import Expense from "./components/Expenses/Expense";
import "./App.css"
import { useState } from "react";
import ExpenseForm from "./components/Expenses/ExpenseForm";

let id = 4;
function App() {
  const expenses1=[
    {
      id:"1",
      name:"Petrol",
      price:"100",
      date:new Date(2024,5,12),
    },
    {
      id:"2",
      name:"Food",
      price:"10",
      date:new Date(2024,5,12),
    },
    {
      id:"3",
      name:"Movie",
      price:"200",
      date:new Date(2024,5,12),
    }
  ] 
  const [expenses, setExpenses] = useState(expenses1);
  
  function deleteExpense(id){
    setExpenses((ExpenseArr)=>{
      return ExpenseArr.filter((expenseElement)=>expenseElement.id!==id)
    })
  }

  function addExpense(obj){
    setExpenses((expenseArr)=>{
      obj.id= id+1;
      id= id+1;
      return [...expenseArr, obj];;
    })
    
  }


  return (
    <div className="App">
      <h1>Expenses</h1>

      
        <ExpenseForm addExpense={addExpense}/>
        <Expense items={expenses} deleteExpense={deleteExpense}/>
       
      
      
    </div>
  );
}

export default App;
