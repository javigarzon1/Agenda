import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Tasklist = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const fetch_todos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                if (data && data.length > 0) {
                    const todos = data.map((todo) => ({
                        id: todo.id,
                        title: todo.title,
                        background: null,
                    }));
                    dispatch({ type: "set_todos", payload: todos });
                }
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetch_todos();
    }, [dispatch]);

    const handleClick = (id, newBackground) => {
        const updatedTodos = store.todos.map(todo =>
            todo.id === id ? { ...todo, background: newBackground } : todo
        );
        dispatch({ type: "set_todos", payload: updatedTodos });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Task List</h1>
            <div className="row">
                {store.todos?.map((todo) => (
                    <div key={todo.id} className="col-md-4 mb-3">
                        <div
                            className={`card h-100 ${todo.background || ""}`}
                            onClick={() => handleClick(todo.id, "bg-success")}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{todo.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/" className="btn btn-primary mt-3">
                Return to Home
            </Link>
        </div>
    );
};
