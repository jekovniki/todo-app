import { writable } from "svelte/store";
import Storage from "./storage";
import { todoDataURL } from "../utils/config";

export const storage = new Storage();

export const todoList = writable(storage.getData());
export const fetchedTodoList = writable([])

const fetchTodo = async () => {
    const result = await fetch(todoDataURL);
    const data: Array<Record<string, any>> = await result.json();
    const loadedTodo = data.map((data) => {
        return {
            ...data,
            color: "#ADD8E6",
        }
    });
    const todos = loadedTodo.slice(0, 10);
    
    fetchedTodoList.set(todos);
}

fetchTodo();