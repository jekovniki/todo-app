<script lang="typescript">
    import Button from "./button.svelte";
    import { storage, todoList } from "../stores/index";
    import { useUpdateAllTiles } from "../hooks/useUpdateAll";

    const handleResolveAll = () => {
        storage.updateAll(true);
        $todoList = $todoList.map(todo => {
            todo.completed = true;
            return todo;
        })
        useUpdateAllTiles(false);
    }

    const handleUnresolveAll = () => {
        storage.updateAll(false);
        $todoList = $todoList.map(todo => {
            todo.completed = false;
            return todo;
        })
        useUpdateAllTiles(true);
    }

    const handleRemoveAll = () => {
        storage.removeAll()
        $todoList = storage.getData();
    }
</script>
<style>
    .app {
        display: flex;
    }
    aside {
        max-width: 250px;
    }
    a {
        text-decoration: none;
        font-weight: 700;
    }
</style>

<div class="app">
    <aside>
        <Button buttonAction={handleResolveAll}>Resolve all</Button>
        <Button buttonAction={handleUnresolveAll}>Unresolve all</Button>
        <Button buttonAction={handleRemoveAll}>Remove all todos</Button>
        <Button><a href="/add">Add new task</a></Button>
    </aside>
    <slot></slot>
</div>