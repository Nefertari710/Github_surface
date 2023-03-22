import {useState} from "react";
import styles from './ToDoList4.module.css';
import NewToDoItem from "./NewToDoItem.jsx";
function ToDoList5({ items, handleDoneList, handleAddTodo }) {
  return (
      <div className={styles.container}>
        <h1>To-Do List</h1>
        <ul>
          {items.map((item, index) => (
              <li key = {index} className={item.isComplete ? styles.liComplete : ""}>
                  <input type="checkbox" defaultChecked={item.isComplete} onChange={(e) => handleDoneList(item,e.target.checked)}/>
                  {item.description}
                  {item.isComplete ? <span>(Done!)</span> : <span/>}
              </li>
          ))}
        </ul>
        <NewToDoItem handleAddTodo={handleAddTodo} />
      </div>
  )
}
export default ToDoList5;