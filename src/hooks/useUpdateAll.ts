import { setCompletedStyles, setUncompletedStyles } from "../utils/helper";
export function useUpdateAllTiles(completed: boolean) {
    const tile = document.querySelectorAll('.todo-tile');
    const title = document.querySelectorAll('.todo-title');
    const content = document.querySelectorAll('.todo-content');
    for(const index in tile) {
        if (completed === false) {
            setCompletedStyles(tile[index], title[index], content[index]);
        } else {
            setUncompletedStyles(tile[index], title[index], content[index]);
        }
    }
}


