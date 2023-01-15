<script lang="typescript">
    export let id = 0;
    export let title = "";
    export let task = "";
    export let date = "";
    export let completed = false;

    const handleClick = () => {
        const tile = document.querySelector('.todo-tile');
        const title = document.querySelector('.todo-title');
        const content = document.querySelector('.todo-content');
        if (tile.style.backgroundColor !== "#90EE90") {
            tile.style.backgroundColor = "#90EE90";
            title.style.margin = 0;
            content.style.margin = 0;
            completed = true;
        } else {
            tile.style.backgroundColor = "#90EE90";
            title.style.margin = "0.83em";
            content.style.margin = "1em";
            completed = false;
        }
    }
    
</script>
<style>
    .todo-tile {
        display: flex;
        box-shadow: 0px 4px 24px rgb(105 119 168 / 10%);
        padding: 1rem 0.5rem;
        transition: 0.3s;
        border-radius: 5px;
        background-color: #ADD8E6;
        margin-bottom: 1rem;
    }
    .content {
        flex: 1;
    }
    .info {
        display: flex;
        justify-content: space-between;
    }
    .checkbox {
        display: flex;
        align-items: center;
    }
    .todo-title {
        transition: 0.3s;
    }
    .todo-content {
        transition: 0.3s;
    }
</style>
<div class="todo-tile">
    <div class="content">
        <div class="info">
            <div class="calendar">Date: { date }</div>
            <div class="completed">Status: { completed === true ? "Completed" : "Todo" }</div>
        </div>
        <h2 class="todo-title">{ id }. { title }</h2>
        <p class="todo-content">{ task}</p>
    </div>
    <div class="checkbox"><input type="checkbox" on:click={handleClick} /></div>
</div>