import type { ApplicationStorage, TodoTask } from "../interfaces/IStores";

class Storage implements ApplicationStorage {
    protected i = 1;

    public getData(selector = "todo"): Array<TodoTask> {
        let data;
        if (typeof window !== "undefined") {
            data = localStorage?.getItem(selector);
        }
        
        return typeof data === "string" ? JSON.parse(data) : [];
    }  

    public addData(item: TodoTask, type = "todo"): void {
        const data = this.getData();
        data.push({
            ...item,
            id: this.i,
            completed: item.completed ?? false
        })
        
        localStorage.setItem(type, JSON.stringify(data));
        this.i++;
    }

    public updateAll(completed: boolean): void {
        const data = this.getData();
        for (const todo of data) {
            todo.completed = completed;
        }
        
        localStorage.setItem("todo", JSON.stringify(data));
    }

    public removeAll(){
        this.i = 1;
        localStorage.clear();
    }
}

export default Storage;