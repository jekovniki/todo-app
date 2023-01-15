<script lang="typescript">
    const date = new Date();
    const dateString = date.toDateString().split(' ');
    const time = `${dateString[1]} ${dateString[2]}`;
</script>

<header>
    <div class="date">{ dateString[3] }<br/> { time }</div>
    <div class="text">
        <h1>Todo SPA</h1>
        <p>Created by Nikolay Zhekov<br />Powered by svelte</p>
    </div>
</header>

<style>
    header {
        display:flex;
        justify-content: space-between;
        margin: 0 1rem;
    }
    h1 {
        margin-bottom:.25rem;
    }
    .date {
        font-size: 3em;
    }
</style>