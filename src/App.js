import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddNewTransaction from "./components/AddNewTransaction";
import GlobleState from "./context/GlobalState";
function App() {

  return (
    <GlobleState>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobleState>
    // Taksh gadhiya
    // dhruv sakariya
    
  );
}

export default App;
