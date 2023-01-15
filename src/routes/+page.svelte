<script lang="typescript">
	import { onMount } from "svelte";
    import Button from "../components/button.svelte";
    import { storage, todoList } from "../stores/index";
    import Tile from "../components/tile.svelte";

    onMount(() => {
        $todoList = storage.getData();
        console.log($todoList);
    })
    
</script>
<style>
    main {
        margin:0 1rem;
    }
</style>
<main>
    {#each $todoList as $todo}
        <Tile id={$todo.id} title={$todo.title} task={$todo.task} date={$todo.date} completed={$todo.completed} />
        {:else}
        <p>No todo's exist</p>
    {/each}
    <Button><a href="/add">Add new task</a></Button>
</main>