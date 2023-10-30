// import ExpenseItem from "./components/Expenses/ExpenseItem.js";
// import ExpenseDate from "./components/Expenses/ExpenseDate.js";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
const Dummy_expenses = [
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  function addExpenceHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenceHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
