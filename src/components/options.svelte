<script language="typescript">
    import Button from "./button.svelte";
    export let label = "Default", options = [''], optionsEvent = () => {};

    if (options.length > 0) {
        options.unshift('Default');
    }
</script>
<style>

</style>

<div>
    <label>{ label }</label>
    <select>
        {#each options as option}
            <option>{ option }</option>
        
        {:else}
        <option disabled selected>No colored todos</option>
    {/each}
    </select>
    <button on:click={optionsEvent}>Search by color</button>
</div>