function ToDoList2({items,handleDoneList}) {
    if(items.length === 0){
      return(
          <p>There are no to-do items!</p>
      );
    }
    return (

    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item,index) => (
          <li key = {index}>
            <input type="checkbox" defaultChecked={item.isComplete} onChange={(e) => handleDoneList(item,e.target.checked)}/>
            {item.description}
            {item.isComplete ? <span>(Done!)</span>:<span></span>}
          </li>
        // item.isComplete
        //   ? <li key = {index}> <input type="checkbox" defaultChecked={item.isComplete} onChange={(e) => handleDoneList(item,e.target.checked)}/> {item.description} {item.isComplete && <span> (done!)</span>}</li>
        //   : <li key = {index}> <input type="checkbox" /> {item.description}</li>
      ))}
    </ul>);

}
export default ToDoList2;