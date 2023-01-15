<script lang="typescript">
    import Button from './button.svelte';
    import Input from './input.svelte';
    // // import { addTodo } from '../stores/stores';

    const handleClick = () => {
        console.log('handle click');
        // addTodo({name: "Gosho", title: "Todo"});
    }
</script>
<style>
    #todo {
        box-sizing: border-box;
    }
</style>

<form id="todo">
    <Input type="text" name="title" placeholder="Title"/>
    <Input type="text" name="task" placeholder="Task"/>
    <Input type="date" name="date" />
    <Button buttonAction={handleClick}>Add new task</Button>
</form>