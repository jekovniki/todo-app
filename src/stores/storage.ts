import type { ApplicationStorage, TodoTask } from "../interfaces/IStores";

class Storage implements ApplicationStorage {
    protected i = 1;

    public getData(selector = "todo"): Array<TodoTask> {
        const items = [];
        for (let index = 1; index < 10; index++) {
            if (typeof window !== "undefined") {
                const data = localStorage?.getItem(`${selector}-${index}`) as string;
                if (data) {
                    items.push(JSON.parse(data));
                }
            }
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