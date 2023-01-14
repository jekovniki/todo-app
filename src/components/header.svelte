<script lang="typescript">
    const date = new Date();
    const dateString = date.toDateString().split(' ');
    const time = `${dateString[1]} ${dateString[2]}`;
</script>

<header>
    <h1>{ dateString[3] }<br/> { time }</h1>
</header>

<style>
    header {
        margin: 0 1rem;
    }
    h1 {
        font-size: 3em;
    }
</style>