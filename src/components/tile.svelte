<script lang="typescript">
	import { useUpdateTile } from "../hooks/useUpdateTile";
    import { todoList, storage } from "../stores/index";


    export let id = 0, title = "", task = "", date = "", completed = false, color ="#ADD8E6";
    const handleClick = () => {
        const todos = $todoList;
        const todoIndex = todos.findIndex(todo => todo.id === id);
        useUpdateTile(id, completed);
        
        if (completed === false) {
            completed = !completed;
            todos[todoIndex].completed = completed;
        } else {
            completed = !completed;
            todos[todoIndex].completed = completed;
        }
        $todoList = todos;
    }
</script>
<style>
    .todo-tile {
        display: flex;
        box-shadow: 0px 4px 24px rgb(105 119 168 / 10%);
        padding: 1rem 0.5rem;
        transition: 0.3s;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
    .content {
        flex: 1;
    }
    .info {
        display: flex;
        justify-content: space-between;
    }
    .todo-title {
        transition: 0.3s;
    }
    .todo-content {
        transition: 0.3s;
    }
</style>
<div class="todo-tile" style="background-color: { color }" on:click={handleClick}>
    <div class="content">
        <div class="info">
            <div class="calendar">Date: { date }</div>
            <div class="completed">Status: { completed === true ? "Completed" : "Todo" }</div>
        </div>
        <h2 class="todo-title">{ id }. { title }</h2>
        <p class="todo-content">{ task}</p>
    </div>
</div>
