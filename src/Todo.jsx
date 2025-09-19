import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"

export default function Todo() {
    let [todo, settodo] = useState([{ task: "Sample-task", id: uuidv4() }]);
    let [todovalue, settodovalue] = useState("");

    let addtask = () => {
        if (todovalue.trim()) {
            settodo([...todo, { task: todovalue, id: uuidv4() }]);
            settodovalue("");
        }
    };

    let newTaskValue = (event) => {
        settodovalue(event.target.value);
    };

    let deleteTodo = (id) => {
        settodo((prevestodo) => prevestodo.filter((item) => item.id !== id));
    };

    return (
        <div className="todo-container">
            <h2 className="heading">Today’s Tasks</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Add your task..."
                    value={todovalue}
                    onChange={newTaskValue}
                    className="input-field"
                />
                <button onClick={addtask} className="add-button">Add</button>
            </div>
            <ul className="task-list">
                {
                    todo.map((item) => (
                        <li key={item.id} className="task-item">
                            <span>{item.task}</span>
                            <button onClick={() => deleteTodo(item.id)} className="delete-button">Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
