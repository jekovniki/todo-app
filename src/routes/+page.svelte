<script lang="typescript">
	import { onMount } from "svelte";
    import { storage, todoList, fetchedTodoList, colorOptions } from "../stores/index";
    import Tile from "../components/tile.svelte";
    import Filter from "../components/filter.svelte";
    import Button from "../components/button.svelte";
    import { useUpdateTile } from "../hooks/useUpdateTile"

    const getTodos = () => {
        const todos = $fetchedTodoList;
        for (const todo of todos) {
            storage.addData(todo);
        }
        $todoList = $fetchedTodoList;

        for (const todo of $todoList) {
            useUpdateTile(todo.id, !todo.completed)
        }

    }
    onMount(() => {
        $todoList = storage.getData();
        $todoList.filter(tile => {
            $colorOptions.push(tile.color ?? "");
        });
    });
    
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
    .generate {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
        <div class="generate">
            <Button buttonAction={getTodos}>Get random todo's</Button>
        </div>
    {/each}
</main>