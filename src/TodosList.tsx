import 'bootstrap/dist/css/bootstrap.css';
import useTodos from "./hooks/useTodos.ts";


function TodosList() {
    const {data: todos, error, isLoading} = useTodos();

    if(isLoading) return <p>Loading ...</p>
    if(error) return <p>{error.message}</p>

    return (
        <ul className="list-group">
            {todos?.map(todo =>
                <li className="list-group-item" key={todo.id}>
                    <div className="d-flex justify-content-between">
                        <span>{todo.title}</span>
                        <span className="badge bg-primary rounded-pill">{todo.completed ? 'completed' : 'in progress'}</span>
                    </div>
                </li>
            )}
       </ul>
    );
}


export default TodosList;