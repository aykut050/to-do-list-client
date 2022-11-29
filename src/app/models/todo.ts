export class Todo {
    id: number;
    nameTodo: string;
    isCompleted: boolean;

    constructor(id: number, nameTodo: string, isCompleted: boolean) {
        this.id = id;
        this.nameTodo = nameTodo;
        this.isCompleted = isCompleted;
    }
}