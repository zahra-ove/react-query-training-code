
interface Task {
    id: number,
    title: string
}

interface AddTask {
    type: 'ADD',
    task: Task
}

interface DeleteTask {
    type: 'DELETE',
    taskId: number
}

type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction) => {
    if(action.type == 'ADD') return [action.task, ...tasks];
    if(action.type == 'DELETE') return tasks.filter(t => t.id != action.taskId)
    return tasks;
}

export default taskReducer;