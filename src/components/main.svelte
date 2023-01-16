<script lang="typescript">
    import Button from "./button.svelte";
    import { storage, todoList } from "../stores/index";

    const handleResolveAll = () => {
        storage.updateAll(true);
        $todoList = storage.getData();
    }

    const handleUnresolveAll = () => {
        storage.updateAll(false);
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