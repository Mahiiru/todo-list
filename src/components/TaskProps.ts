export interface TaskProps{
    id: number;
    text: string;
    completed: boolean;
}

export interface TaskPropsWithFunctions extends TaskProps {
    completeTask(task: TaskProps): void;
    deleteTask(task: TaskProps): void;
}