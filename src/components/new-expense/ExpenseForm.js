import { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmout, setEnteredAmout] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmout(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmout,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmout("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            onChange={titleChangeHandler}
            className="new-expense__control input"
            type="text"
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            onChange={amountChangeHandler}
            className="new-expense__control input"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmout}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            onChange={dateChangeHandler}
            className="new-expense__control input"
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};
