<script lang="typescript">
	import { onMount } from "svelte";
    import { storage, todoList, fetchedTodoList } from "../stores/index";
    import Tile from "../components/tile.svelte";
    import Filter from "../components/filter.svelte";

    const getTodos = () => {
        const todos = $fetchedTodoList;
        for (const todo of todos) {
            storage.addData(todo);
        }
        $todoList = $fetchedTodoList;

    }
    onMount(() => {
        $todoList = storage.getData();
    })
    
</script>
<style>
    main {
        flex: 1;
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
    <Filter />
    {#each $todoList as $todo}
        <Tile 
            id={$todo.id} 
            title={$todo.title} 
            task={$todo.task} 
            date={$todo.date} 
            completed={$todo.completed}
            color={$todo.color}
             />
        {:else}
        <p class="empty">No todo's exist :( .<br/> Please click the button under in order to create new todo</p>
        <div>
            <button on:click={getTodos}>Get random todo's</button>
        </div>
    {/each}
</main>