import {useState} from "react";
import styles from './ToDoList6.module.css';
function ToDoList6({ items, handleAddTodo, handleRemove}) {

  function NewToDoItem({ onAdd }) {
    const [description, setDescription] = useState('');

    const handleAdd = () => {
      if (description) {
        onAdd({ description, completed: false });
        setDescription('');
      }
    };

    return (
        <div>
          <input
              type="text"
              placeholder="Enter a new to-do item"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
    );
  }


  return (
      <div>
        <h1>To-Do List</h1>
        <ul>
          {items.map((item, index) => (
              <li key={index}>
                <input type="checkbox" defaultChecked={item.isComplete} />
                {item.description}
                {item.isComplete && <span> (done!)</span>}
                <button onClick={() => handleRemove(index) } className={styles.butremove}>Remove</button>
              </li>
          ))}
        </ul>
        <NewToDoItem onAdd={handleAddTodo} />
      </div>
  );
}

export default ToDoList6;
