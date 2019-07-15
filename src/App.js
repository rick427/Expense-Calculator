import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from 'uuid/v4'

const initialExpenses = [
  {id: uuid(), charge: "rent", amount: 1600},
  {id: uuid(), charge: "car payments", amount: 400},
  {id: uuid(), charge: "credit card bill", amount: 1200}
];

function App() {
  const [expense, setExpense] = useState(initialExpenses);
  console.log(expense[1]);

  return (
    <>
      <Alert/>
      <h1>Budget Calculator</h1>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  );
}

export default App;
