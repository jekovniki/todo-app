<script language="typescript">
    import { values } from "../utils/config";
    export let label = values.dropdown.default, options = [''], optionsEvent = () => {};

    if (options.length > 0) {
        options.unshift(values.dropdown.default);
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