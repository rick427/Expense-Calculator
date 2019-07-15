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
  const [expenses, setExpense] = useState(initialExpenses);

  return (
    <>
      <Alert/>
      <h1>Budget Calculator</h1>
      
      <main className="App">
        <ExpenseForm/>
        <ExpenseList expenses={expenses}/>
      </main>

      <h1>Total Spending : 
          <span className="total">
            ${expenses.reduce((total, expense) => {
              return total +=expense.amount;
            },0)}
          </span>
      </h1>
    </>
  );
}

export default App;
