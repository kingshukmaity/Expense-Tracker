import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  function saveExpenseDataHandler(enterExpenceData) {
    const expenseData = {
      ...enterExpenceData,
      id: Math.floor(Math.random().toString() * 100000000),
    };
    props.onAddExpense(expenseData)
    // console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onChangeExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
