import {useReducer} from "react";
import taskReducer from "../state-management/reducers/taskReducer.ts";


function TaskList() {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <>
            <button onClick={() => dispatch({type:'ADD', task: {id: Date.now(), title: 'task' + Date.now()}})}>Add Task</button>
            <ul>
                {tasks.map(task => <i key={task.id}>
                    <div className="d-flex justify-content-around">
                        <span>{task.title}</span>
                        <button onClick={() => dispatch({type: 'DELETE', taskId: task.id })}>DELETE</button>
                    </div>
                </i>)}
            </ul>
        </>
    );
}

export default TaskList;