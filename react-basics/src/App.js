import Expense from "./components/Expenses/Expense";
import "./App.css"
import { useState } from "react";
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
  const [formData, setFormData] = useState({id:"", name:"", price:"", date: new Date()})
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
    setFormData({id:"", name:"", price:"", date: new Date()})
  }

  function handleInputChange (e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit (e){
    e.preventDefault();
    console.log(formData)
    addExpense(formData);
  }
  return (
    <div className="App">
      <h1>Expenses</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date.toISOString().split('T')[0]}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      
        
        <Expense items={expenses} deleteExpense={deleteExpense}/>
       
      
      
    </div>
  );
}

export default App;
