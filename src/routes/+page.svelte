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
    .empty {
        text-align:center;
        font-size:1.5rem;
    }
    a {
        text-decoration: none;
    }
</style>
<main>
    {#each $todoList as $todo}
        <Tile id={$todo.id} title={$todo.title} task={$todo.task} date={$todo.date} completed={$todo.completed} />
        {:else}
        <p class="empty">No todo's exist :( .<br/> Please click the button under in order to create new todo</p>
    {/each}
    <Button><a href="/add">Add new task</a></Button>
</main>