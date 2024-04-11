import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Todo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

const useTodos = () => {
    const fetchToDos = () =>
        axios
            .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)

    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchToDos
    });
}

export default useTodos;