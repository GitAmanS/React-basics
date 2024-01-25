import Expense from "./components/Expense";

function App() {
  return (
    <div className="App">
      <h1>Expenses</h1>
      <Expense expense="Food Rs 10"/>
      <Expense expense="Petrol Rs 100"/>
      <Expense expense="Movie Rs 200"/>
    </div>
  );
}

export default App;
