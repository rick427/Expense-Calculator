import React from 'react';
import {MdSend} from 'react-icons/md';

const ExpenseForm = () => {
    return (
      <form>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">charge</label>
                <input 
                   type="text" 
                   id="charge" 
                   name="charge" 
                   className="form-control"
                   placeholder="e.g rent"
                />
            </div>
            <div className="form-group">
                <label htmlFor="amount">amount</label>
                <input 
                   type="text" 
                   id="amount" 
                   name="amount" 
                   className="form-control"
                   placeholder="e.g 100"
                />
            </div>
        </div>
        <button className="btn" type="submit">
            submit
            <MdSend className="btn-icon"/>
        </button>
        </form>
    )
}

export default ExpenseForm;
