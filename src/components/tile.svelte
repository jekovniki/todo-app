<script lang="typescript">
    export let id = 0, title = "", task = "", date = "", completed = false;
    const handleClick = () => {
        let elementNumber = id - 1;
        const tile = document.querySelectorAll('.todo-tile');
        const title = document.querySelectorAll('.todo-title');
        const content = document.querySelectorAll('.todo-content');
        if (completed === false) {
            tile[elementNumber].style.backgroundColor = "#90EE90";
            title[elementNumber].style.margin = 0;
            content[elementNumber].style.margin = 0;
            completed = true;
        } else {
            tile[elementNumber].style.backgroundColor = "#ADD8E6";
            title[elementNumber].style.marginTop = "0.83em";
            title[elementNumber].style.marginBottom = "0.83em";
            content[elementNumber].style.marginTop = "1em";
            content[elementNumber].style.marginBottom = "1em";
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
    .todo-title {
        transition: 0.3s;
    }
    .todo-content {
        transition: 0.3s;
    }
</style>
<div class="todo-tile" on:click={handleClick}>
    <div class="content">
        <div class="info">
            <div class="calendar">Date: { date }</div>
            <div class="completed">Status: { completed === true ? "Completed" : "Todo" }</div>
        </div>
        <h2 class="todo-title">{ id }. { title }</h2>
        <p class="todo-content">{ task}</p>
    </div>
</div>
