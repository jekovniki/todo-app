<script language="typescript">
    import { values } from "../utils/config";
    import { storage, colorOptions } from "../stores";
	import { onMount } from "svelte";
    export let label = values.dropdown.default, options = [''], optionsEvent = () => {};
    
    options = ['Default', ...$colorOptions];
    options = [... new Set(options)];
    onMount(() => {
        const data = storage.getData();
        data.filter(tile => {
            $colorOptions.push(tile.color ?? "");
        });
        options = ['Default', ...$colorOptions];
        options = [... new Set(options)];
    })

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