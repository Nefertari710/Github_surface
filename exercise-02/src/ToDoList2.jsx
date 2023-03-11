function ToDoList2({items}) {
    if(items.length === 0){
      return(
          <p>There are no to-do items!</p>
      );
    }
    return (

    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item,index) => (
        item.isComplete
          ? <li key = {index}> <input type="checkbox" defaultChecked={item.isComplete}/> {item.description} {item.isComplete && <span> (done!)</span>}</li>
          : <li key = {index}> <input type="checkbox" /> {item.description}</li>
      ))}
    </ul>);

}
export default ToDoList2;