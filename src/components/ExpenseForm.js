import React from 'react';
import {MdSend} from 'react-icons/md';

const ExpenseForm = ({charge, amount, edit, handleChange, handleSubmit}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">charge</label>
                <input 
                   type="text" 
                   id="charge" 
                   name="charge" 
                   value={charge}
                   onChange={handleChange}
                   className="form-control"
                   placeholder="e.g rent"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">amount</label>
                <input 
                   type="number" 
                   id="amount" 
                   name="amount" 
                   value={amount}
                   onChange={handleChange}
                   className="form-control"
                   placeholder="e.g 100"
                />
            </div>
        </div>
        <button className="btn" type="submit">
            {edit ? 'Edit' : 'Add Expense'}
            <MdSend className="btn-icon"/>
        </button>
        </form>
    )
}

export default ExpenseForm;
