import Expense from "./components/Expenses/Expense";
import "./App.css"
import { useState } from "react";
import ExpenseForm from "./components/Expenses/ExpenseForm";

let id = 4;
function App() {
  const expenses1=[
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
