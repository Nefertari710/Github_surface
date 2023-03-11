function ToDoList3({items,addlist}){

  return (
    <div>
      <button onClick={addlist} >Here is a button</button>
      {items.map((item,index) => (
          item.isComplete
              ? <li key = {index}> <input type="checkbox" defaultChecked={item.isComplete}/> {item.description} {item.isComplete && <span> (done!)</span>}</li>
              : <li key = {index}> <input type="checkbox" /> {item.description}</li>
      ))}
    </div>
  )
}

export default ToDoList3;