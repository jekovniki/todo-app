import { writable } from "svelte/store";
import Storage from "./storage";

export const storage = new Storage();

export const todoList = writable(storage.getData());
