import React from "react";

function Todo({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-complete" ><img src="https://img.icons8.com/fluency/2x/checkmark.png" /></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash" ><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/2x/external-delete-multimedia-kiranshastry-solid-kiranshastry.png" /></i>
            </button>
        </div>
    )
}

export default Todo;