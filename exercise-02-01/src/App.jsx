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
import NewToDoItem from "./NewToDoItem.jsx";




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

  const [todos2_new,setTodos2_new] = useState(initialTodos);


  const [todos5,setTodos5] = useState(initialTodos);

  function handleDoneList(item,e){
    const index = todos2_new.indexOf(item);
    const newToDo = [...todos2_new];
    newToDo[index] = {
      ...newToDo[index],
      isComplete: e
    }
    setTodos2_new(newToDo)
  }
  // function addTodoList(){
  //   const newTodo = [
  //     { description: 'Do homework1', isComplete: false },
  //     { description: 'Sleep1', isComplete: true }];
  //
  //   const newTodos = [...todos2, ...newTodo];
  //   setTodos(newTodos);
  // }
  // function handleAddTodo2(newTodo){
  //   setTodos2_new([...todos2_new, newTodo]);
  // };
  const handleAddTodo = (newTodo) => {
    setTodos2_new([...todos2_new, newTodo]);
  };
  const handleAddTodo1 = (newTodo) => {
    setTodos5([...todos5, newTodo]);
  };
  function handleRemove(index){
    const newItems = [...todos2_new];
    newItems.splice(index, 1);
    setTodos2_new(newItems);
  }

  return (

    <div>
      <h1>About me</h1>
      {<MyDetail />}

      <h1>About me2</h1>
      {<MyDetail2 firstname = "Kevin" lastname = "Ma" />}

      <h1>About me2</h1>
      {<MyDetail3 sex = "Male" age = "21" />}
      
      <h1>My Three items</h1>
      {<ToDoList items={["Finish lecture", "Do homework", "Sleep"]} />}

      <h1>My light bulb1</h1>
      {<ToDoList items={[]} />}

      <h1>Light</h1>
      {<LightBulb />}

      <h1>Rebuilt tools2 new</h1>
      {<ToDoList2 items={todos2_new} handleDoneList = {handleDoneList}/>}

      {/*判断empty什么输出*/}
      <h1>Rebuilt tools empty</h1>
      {<ToDoList2 items={todos1} />}

      {/*控制台输出内容*/}
      {<h1>My todos 4</h1>}
      {<ToDoList4 items={todos2_new} handleDoneList = {handleDoneList} onTodoStatusChanged={(index, status) => console.log(index, status)} />}

      {/*可以添加todo项目*/}
      {<h1>My todos 5</h1>}
      {<ToDoList5 items={todos2_new} handleDoneList = {handleDoneList} handleAddTodo={handleAddTodo} />}

      {<h1>My todos 6</h1>}
      {<ToDoList6 items={todos2_new} handleDoneList = {handleDoneList} handleAddTodo={handleAddTodo} handleRemove ={handleRemove}/>}

    </div>
  );
}

export default App;