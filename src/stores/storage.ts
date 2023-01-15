import type { ApplicationStorage, TodoTask } from "../interfaces/IStores";

class Storage implements ApplicationStorage {
    protected i = 1;

    public getData(selector = ""): Array<TodoTask> {
        const items = localStorage.getItem(selector);
        return items ? JSON.parse(items) : [{}];
    }

    public addData(item: TodoTask, type = "todo"): void {
        localStorage.setItem(`${type}-${this.i}`, JSON.stringify({
            ...item, 
            id: this.i, 
            completed: item.completed ?? false
        }));
        this.i++;
    }
}

export default Storage;