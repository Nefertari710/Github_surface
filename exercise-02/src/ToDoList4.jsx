import styles from './ToDoList4.module.css';
function ToDoList4({ items, onTodoStatusChanged }){

    function handleCheckboxChange(index, event) {
        const newStatus = event.target.checked;
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
                item.isComplete
                    ? <li key = {index} className={styles.selectli}>
                        <input type="checkbox" checked={item.isComplete} onChange={(event) => handleCheckboxChange(index, event)}/> {item.description} {item.isComplete && <span> (done!)</span>}
                    </li>
                    : <li key = {index}>
                        <input type="checkbox" checked={item.status} onChange={(event) => handleCheckboxChange(index, event)}/> {item.description}
                    </li>
            ))}
            </ul>
        </div>
    );
}

export default ToDoList4;