import { useState } from "react";
import MyDetail from "./AboutMe";
import MyDetail2 from "./AboutMe2";
import MyDetail3 from "./AboutMe3";
import LightBulb from "./LightBulb";
import ToDoList from "./ToDoList";
import ToDoList2 from "./ToDoList2";
import ToDoList3 from "./ToDoList3.jsx";
import ToDoList4 from "./ToDoList4.jsx";
import ToDoList5 from "./ToDoList5.jsx";
import ToDoList6 from "./ToDoList6.jsx";



const todos = [
  { description: 'Finish lecture', isComplete: true },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: true }
];

const initialTodos = [
  { description: 'Finish lecture', isComplete: true },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: true }
];


function App() {
  const todos1 = [];

  const [todos2,setTodos] = useState(initialTodos);

  const [todos3,setTodos3] = useState(initialTodos);

  const [todos4,setTodos4] = useState(initialTodos);

  const [todos5,setTodos5] = useState(initialTodos);
  function addTodoList(){
    const newTodo = [
      { description: 'Do homework1', isComplete: false },
      { description: 'Sleep1', isComplete: true }];

    const newTodos = [...todos2, ...newTodo];
    setTodos(newTodos);
  }

  const handleAddTodo = (newTodo) => {
    setTodos4([...todos4, newTodo]);
  };
  const handleAddTodo1 = (newTodo) => {
    setTodos5([...todos5, newTodo]);
  };
  const handleRemove = (index) => {
    const newItems = [...todos5];
    newItems.splice(index, 1);
    setTodos5(newItems);
  };

  return (

    <div>
      <h1>About me</h1>
      {<MyDetail />}

      <h1>About me2</h1>
      {<MyDetail2 firstname = "Kevin" lastname = "Ma" />}

      <h1>About me2</h1>
      {<MyDetail3 sex = "Male" age = "21" />}
      
      <h1>My light bulb</h1>
      {<ToDoList items={["Finish lecture", "Do homework", "Sleep"]} />}

      <h1>My light bulb1</h1>
      {<ToDoList items={[]} />}

      <h1>Light</h1>
      {<LightBulb />}
      

      <h1>Rebuilt tools2</h1>
      {<ToDoList2 items={todos} />}

      <h1>Rebuilt tools empty</h1>
      {<ToDoList2 items={todos1} />}



      <h1>Rebuilt tools hook3</h1>
      {<ToDoList3 items={todos2} addlist = {addTodoList} />}


      {<h1>My todos 4</h1>}
      {<ToDoList4 items={todos3} onTodoStatusChanged={(index, status) => console.log(index, status)} />}

      {<h1>My todos 5</h1>}
      {<ToDoList5 items={todos4} handleAddTodo={handleAddTodo} />}

      {<h1>My todos 6</h1>}
      {<ToDoList6 items={todos5} handleAddTodo={handleAddTodo1} handleRemove ={handleRemove}/>}
    </div>
  );
}

export default App;