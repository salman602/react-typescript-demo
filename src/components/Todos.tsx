import React, { useCallback, useReducer, useRef } from 'react'

interface ITodo {
    id: number,
    name: string,
    isCompleted?: boolean
}
type actionType = { type: "ADD", name: string } | { type: "REMOVE", id: number };

const reducer = (state: ITodo[], action: actionType) => {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: state.length,
                name: action.name
            }];
        case "REMOVE":
            return state.filter(({ id }) => id !== action.id)
    }
};
const Todos = () => {
    // useReducer
    const [todos, dispatch] = useReducer(reducer, []);

    const newTodoRef = useRef<HTMLInputElement>(null);
    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            dispatch({
                type: "ADD",
                name: newTodoRef.current.value
            })
            newTodoRef.current.value = "";
        }
    }, []);

    const onRemoveTodo = useCallback((id) => {
        dispatch({
            type: "REMOVE",
            id: id
        })
    }, [])

    return (
        <div>
            <input type="text" ref={newTodoRef} />
            <button onClick={onAddTodo}>Add</button>
            <div>
                {
                    todos.map(singleTodo => (
                        <div key={singleTodo.id}>
                            {singleTodo.name}
                            <button onClick={() => onRemoveTodo(singleTodo.id)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todos;