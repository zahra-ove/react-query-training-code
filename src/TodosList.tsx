import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

interface Todo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}


function TodosList() {
    const fetchToDos = () =>
        axios
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)


    const { data: todos, error } = useQuery<Todop[], Error>({
        queryKey: ['todos'],
        queryFn: fetchToDos
    });


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