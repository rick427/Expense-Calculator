import React from 'react';
import ExpenseItem from './ExpenseItem';
import {MdDelete} from 'react-icons/md';

const ExpenseList = ({expenses, handleUpdate, handleDelete, clearItems}) => {
    return (
       <>
          {expenses.length > 0 ? (
            <ul className="list">
              {expenses.map(expense=> {
                 return <ExpenseItem 
                            key={expense.id} 
                            expense={expense} 
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
              })}
            </ul>
          ) : (
              <p className="no_exp">No Expenses Added. To Show Them, Please Some Above</p>
          )}
          {expenses.length > 0 && (
              <button className="btn" onClick={clearItems}>
                  Clear Expenses
                  <MdDelete className="btn-icon"/>
              </button>
          )}
       </>
    )
}

export default ExpenseList;
