import {useState} from "react";

function NewToDoItem({ handleAddTodo }) {
    const [description, setDescription] = useState('');
    const handleAdd = () => {
        if (description) {
            handleAddTodo({ description, isComplete: false });
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
export default NewToDoItem;