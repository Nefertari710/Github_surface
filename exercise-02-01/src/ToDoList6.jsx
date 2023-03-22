import styles from './ToDoList6.module.css';
import NewToDoItem from "./NewToDoItem.jsx";
import styles4 from "./ToDoList4.module.css"
function ToDoList6({ items, handleAddTodo, handleRemove}) {

  return (
      <div>
        <h1>To-Do List</h1>
        <ul>
          {items.map((item, index) => (
              <li key={index} className={item.isComplete ? styles4.liComplete : ""}>
                <input type={"checkbox"} checked={item.isComplete} onChange={(e) => handleAddTodo(item,e.target.checked)}/>
                {item.description}
                {item.isComplete && <span> (done!)</span>}
                <button onClick={() => handleRemove(index)} className={styles4.button1}>Remove</button>
              </li>

          ))}
        </ul>
        <NewToDoItem handleAddTodo={handleAddTodo} />
      </div>
  );
}

export default ToDoList6;
