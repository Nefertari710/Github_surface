import styles from './ToDoList4.module.css';
function ToDoList4({ items, onTodoStatusChanged,handleDoneList}){
    function handleCheckboxChange(item, index, newStatus) {

        handleDoneList(item,newStatus)
        onTodoStatusChanged(index, newStatus);
    }

    if(items.length === 0){
        return(
            <p>There are no to-do items!</p>
        );
    }
    return (
        <div className={styles.container}>
            <ul>
            {items.map((item,index) => (
                <li key = {index} className={item.isComplete ? styles.liComplete : ""}>
                    <input type= "checkbox" defaultChecked={item.isComplete}
                           onChange={(e) => handleCheckboxChange(item, index, e.target.checked)} />
                    {item.description}
                    {item.isComplete?<span >(Done!)</span>:<span/>}
                </li>
            ))}
            </ul>
        </div>
    );
}


export default ToDoList4;