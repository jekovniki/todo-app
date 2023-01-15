<script lang="typescript">
    import Button from "../components/button.svelte";
    import Todo from "../components/todo.svelte";
    import { todoList } from "../stores/index";

    console.log($todoList);
    $: todoListCount = $todoList.length;
    $: completedTask = $todoList.filter(item => item.completed).length;
    
</script>
<style>
    main {
        margin:0 1rem;
    }
</style>
<main>
    <Todo />
    <Button>Add new task</Button>
</main>