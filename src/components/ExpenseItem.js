import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md';

const ExpenseItem = ({expense, handleUpdate, handleDelete}) => {
    const {id, charge, amount} = expense;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>

            <div>
                <button 
                   className="edit-btn" 
                   aria-label="edit button" 
                   onClick={() => handleUpdate(id)}
                >
                    <MdEdit/>
                </button>
                <button 
                   className="clear-btn" 
                   aria-label="delete button" 
                   onClick={() => handleDelete(id)}
                >
                    <MdDelete/>
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem;
