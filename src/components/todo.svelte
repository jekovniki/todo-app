<script lang="typescript">
    import Button from './button.svelte';
    import Input from './input.svelte';
    import { storage } from '../stores/index';

    const handleClick = () => {
        const title = document.querySelector('input[name="title"]');
        const task = document.querySelector('input[name="task"]');
        const date = document.querySelector('input[name="date"]');
        
        storage.addData({ 
            title: title.value ?? "", 
            task: task.value ?? "", 
            date: date.value ?? "",
        });
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
    <Button buttonAction={handleClick}><a href="/">Add new task</a></Button>
</form>