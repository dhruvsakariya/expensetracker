import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddNewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount(null)
    setText('')
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            id="text"
            onChange={(event) => {
              setText(event.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            id="amount"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddNewTransaction;
