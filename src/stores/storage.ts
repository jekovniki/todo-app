import type { ApplicationStorage, TodoTask } from "../interfaces/IStores";

class Storage implements ApplicationStorage {
    protected i = 1;

    public getData(selector = "todo"): Array<TodoTask> {
        const items = [];
        for (let index = 1; index < this.i; index++) {
            const data = localStorage.getItem(`${selector}-${index}`) as string;
            
            items.push(JSON.parse(data));
        }
        return items ?? [{}];
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