<script lang="typescript">
    import Button from './button.svelte';
    import Input from './input.svelte';
    import { storage } from '../stores/index';
    import { values } from '../utils/config';

    let isActiveColorPicker = false;
    let isError = false;

    const handleClick = () => {
        const input = document.querySelector('.color-input .value');
        const title = document.querySelector('input[name="title"]');
        const task = document.querySelector('input[name="task"]');
        const date = document.querySelector('input[name="date"]');
        
        if (title === null || title === undefined || title.value == "") {
            event?.preventDefault();
            isError = true;
            return false;
        }
        isError = false;

        storage.addData({ 
            title: title.value, 
            task: task?.value ?? "", 
            date: date?.value ?? "",
            color: input?.innerHTML?.length > 7 ? values.dropdown.default : input?.innerHTML,
        });
    }

    const togglePicker = () => {
        isActiveColorPicker = false;
        const input = document.querySelector('.color-input .value');
        const color = document.querySelector('input[name="color"]');

        if (input && 'innerText' in input && color && 'value' in color) {
            input.innerText = color.value;
        }
    }

</script>
<style>
    .container {
        position: relative;
    }
    #todo {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    .color-input {
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:15px;
        border-bottom: 1px solid #fff;
    }
    .color-picker {
        position:absolute;
        width: 100%;
        border-radius: 25px;
        bottom:0;
        left:0;
        background-color: #fff;
        color: #000;
        transition: 0.4s;
        animation: togglePicker;
        animation-duration: .5s;
        padding: 1rem 0 0;
    }
    .color-picker h3 {
        margin-left: 1rem;
        color: #000;
    }
    label {
        font-size: 14px;
    }
    .value p {
        margin: 0;
    }

    .error-message {
        color:red;
        padding: 2rem 0.5rem;
        border-radius: 25px;
        background-color: #fff;
    }
</style>

<div class="container">
    {#if isError}
        <p class="error-message">Title field is required!</p>
    {/if}
    <form id="todo">
        <Input type="text" name="title" placeholder="Title" required={true}/>
        <Input type="text" name="task" placeholder="Task"/>
        <Input type="date" name="date" />
        <div class="color-input" on:click={() => { isActiveColorPicker = true }}>
            <div class="label"><label>Select custom color</label></div>
            <div class="value"><p>Default</p></div>
        </div>
        <Button><a href="/" on:click={handleClick}>Add new task</a></Button>
    </form>
    {#if (isActiveColorPicker === true)}
        <div class="color-picker">
            <h3>Choose your color:</h3>
            <Input type="color" name="color" />
            <Button buttonAction={togglePicker}>Set color</Button>
        </div>
    {/if}
</div>