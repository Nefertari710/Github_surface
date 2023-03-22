function ToDoList(props){
    const items = props.items;
    //Exercise Five - Conditional rendering
    if(items.length === 0){
        return(
            <p>There are no to-do items!</p>
        );
    }

    //Exercise Four - A basic to-do list
    return (
        <ul>
            {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    );
}

export default ToDoList;