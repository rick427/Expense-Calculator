import React, {useState, useEffect} from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from 'uuid/v4'

// const initialExpenses = [
//   {id: uuid(), charge: "rent", amount: 1600},
//   {id: uuid(), charge: "car payments", amount: 400},
//   {id: uuid(), charge: "credit card bill", amount: 1200}
// ];

const initialExpenses = localStorage.getItem("expenses") ? (
  JSON.parse(localStorage.getItem("expenses"))
  ) : [];

function App() {

  //Local State
  const [expenses, setExpenses] = useState(initialExpenses);
  const [formField, setFormField] = useState({
    charge: '',
    amount: ''
  });
  const [alert, setAlert] = useState({show: false});
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  
  //Side-Effect
  useEffect(() => {
    console.log('we called useeffect');
    localStorage.setItem("expenses", JSON.stringify(expenses));
  },[expenses]);

  //state fromfield destructure
  const {charge, amount} = formField;


  //Handle Change Function
  const handleChange = e => {
    setFormField({...formField, [e.target.name]:e.target.value })
  }

  //Handle Alert Method
  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});

    setTimeout(() => {
      setAlert({show: false})
    },3000)
  }
  
  //Submit the form 
  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount > 0){
      //if you are updating
      if(edit){
        let temp = expenses.map(expense => {
          return expense.id === id ? {...expense, charge, amount} : expense
        });
        setExpenses(temp);
        setEdit(false);
        handleAlert({type: 'success', text: 'Expense updated successfully'})
      } 
      else{
        const singleExpense = {id: uuid(), charge, amount};

        setExpenses([...expenses, singleExpense]);
        handleAlert({type: 'success', text:'Expenses Added!!..'})
      }
      setFormField({charge: '', amount: ''});      
    }
    else {
       handleAlert({type: 'danger', text: `Fields cannot be empty`});
    }
  };
 
  //Clear all items 
  const clearItems = () => {
    setExpenses([]);
    handleAlert({type: 'danger', text:'All Expenses cleared'});
  };

  //Delete items
  const handleDelete = id => {
    const filtered = expenses.filter(expense => expense.id !== id)
    setExpenses(filtered);
    handleAlert({type: 'danger', text:'Item deleted Successfully'})
  };

  //Update items
  const handleUpdate = id => {
    let expense = expenses.find(item => item.id === id)
    let {charge, amount} = expense;
    setFormField({charge, amount});
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert/>
      <h1>Budget Calculator</h1>
      
      <main className="App">
        <ExpenseForm 
           charge={charge} 
           amount={amount} 
           handleChange={handleChange} 
           handleSubmit={handleSubmit}
           edit={edit}
        />
        <ExpenseList 
           expenses={expenses}
           handleDelete={handleDelete}
           handleUpdate={handleUpdate}
           clearItems={clearItems}
        />
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
