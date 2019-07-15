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
  //Local State
  const [expenses, setExpenses] = useState(initialExpenses);
  const [formField, setFormField] = useState({
    charge: '',
    amount: ''
  });
  const {charge, amount} = formField;

  const handleChange = e => {
    setFormField({...formField, [e.target.name]:e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    if(charge !== '' && amount > 0){
      const singleExpense = {id: uuid(), charge, amount};
      setExpenses([...expenses, singleExpense]);
      setFormField({
        charge: '',
        amount: ''
      })
    }
    else{

    }
  };

  return (
    <>
      <Alert/>
      <h1>Budget Calculator</h1>
      
      <main className="App">
        <ExpenseForm 
           charge={charge} 
           amount={amount} 
           handleChange={handleChange} 
           handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses}/>
      </main>

      <h1>Total Spending : 
          <span className="total">
            ${expenses.reduce((total, expense) => {
              return total +=parseInt(expense.amount);
            },0)}
          </span>
      </h1>
    </>
  );
}

export default App;
