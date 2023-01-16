import { setCompletedStyles, setUncompletedStyles } from "../utils/helper";

export function useUpdateTile(id: number, completed: boolean) {
    const elementNumber = id - 1;
    const tile = document.querySelectorAll('.todo-tile');
    const title = document.querySelectorAll('.todo-title');
    const content = document.querySelectorAll('.todo-content');
    if (completed === false) {
        setCompletedStyles(tile[elementNumber], title[elementNumber], content[elementNumber]);
    } else {
        setUncompletedStyles(tile[elementNumber], title[elementNumber], content[elementNumber]);
    }
}


