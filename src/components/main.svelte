<script lang="typescript">
    import Button from "./button.svelte";
    import { storage, todoList } from "../stores/index";

    const handleResolveAll = () => {
        const data = storage.getData();
        for (const todo in data) {
            const updated = data[todo];
            updated.completed = true;
            storage.update(updated, `todo-${updated.id}`)
        }
        
        $todoList = storage.getData();
    }

    const handleUnresolveAll = () => {
        const data = storage.getData();
        for (const todo in data) {
            const updated = data[todo];
            console.log(updated);
            
            updated.completed = false;
            storage.update(updated, `todo-${updated.id}`)
        }
        
        $todoList = storage.getData();
    }

    const handleRemoveAll = () => {
        storage.removeAll()
        $todoList = storage.getData();
    }
</script>
<style>
    main {
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

<main>
    <aside>
        <Button buttonAction={handleResolveAll}>Resolve all</Button>
        <Button buttonAction={handleUnresolveAll}>Unresolve all</Button>
        <Button buttonAction={handleRemoveAll}>Remove all todos</Button>
        <Button><a href="/add">Add new task</a></Button>
    </aside>
    <slot></slot>
</main>