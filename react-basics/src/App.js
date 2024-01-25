import Expense from "./components/Expense";

function App() {
  return (
    <div className="App">
      <h1>Expenses</h1>
      <Expense expense="Food Rs" price="10"/>
      <Expense expense="Petrol" price="100"/>
      <Expense expense="Movie" price="200"/>
    </div>
  );
}

export default App;
