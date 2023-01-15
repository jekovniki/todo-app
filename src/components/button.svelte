<script lang="typescript">
    export let buttonAction = () => {
        console.log("Successfull button action");
    }
</script>
<style>
    button {
        width: 100%;
        padding: 1rem 0;
        color: #ffffff;
        font-weight:700;
        font-size:1.2rem;
        border: 1px solid transparent;
        background-color: #63b5cf;
        border-radius: 5px;
        transition: 0.4s;
        text-transform: uppercase;
        margin-top: 2rem;
    }
    button:hover {
        transition: 0.4s;
        background-color: #b1dae7;
        cursor: pointer;
    }
</style>
<button on:click={buttonAction}>
    <slot>
    </slot>
</button>