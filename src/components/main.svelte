<script lang="typescript">
    import Button from "./button.svelte";
    import { storage, todoList } from "../stores/index";
    import { useUpdateAllTiles } from "../hooks/useUpdateAll";

    function handleAllTodos(boolean){
        storage.updateAll(boolean);
        $todoList = $todoList.map(todo => {
            todo.completed = boolean;
            return todo;
        });

        useUpdateAllTiles(!boolean);
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
        <Button buttonAction={() => { handleAllTodos(true) }}>Resolve all</Button>
        <Button buttonAction={() => { handleAllTodos(false) }}>Unresolve all</Button>
        <Button buttonAction={handleRemoveAll}>Remove all todos</Button>
        <Button><a href="/add">Add new task</a></Button>
    </aside>
    <slot></slot>
</div>