import { writable } from "svelte/store";
import Storage from "./storage";

export const storage = new Storage();

export const todoList = writable([{
        id: 1,
        title: "Test",
        task: "Garbage",
        date: "12/12/2022",
        completed: false
    }, {
        id: 2,
        title: "Test",
        task: "Garbage",
        date: "12/12/2022",
        completed: false
    }
]);
