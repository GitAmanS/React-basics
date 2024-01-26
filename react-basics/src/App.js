import Expense from "./components/Expenses/Expense";
import "./App.css"
function App() {
  const expenses=[
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
  return (
    <div className="App">
      <h1>Expenses</h1>

      
        
        <Expense items={expenses} />
       
      
      
    </div>
  );
}

export default App;
