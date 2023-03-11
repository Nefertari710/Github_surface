import {useState} from "react";


function ToDoList5({ items, handleAddTodo }) {

  function NewToDoItem({ onAdd }) {
    const [description, setDescription] = useState('');

    const handleAdd = () => {
      if (description) {
        onAdd({ description, completed: false });
        setDescription('');
      }
    };

    return (
        <div className="new-todo-item">
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
              items.isComplete
                  ? <li key = {index}> <input type="checkbox" defaultChecked={item.isComplete}/> {item.description} {item.isComplete && <span> (done!)</span>}</li>
                  : <li key = {index}> <input type="checkbox" /> {item.description}</li>
          ))}
        </ul>
        <NewToDoItem onAdd={handleAddTodo} />
      </div>
  )
}
export default ToDoList5;