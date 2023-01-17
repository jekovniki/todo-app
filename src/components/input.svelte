<script lang="typescript">
    export let type = "", name = "", placeholder = "", inputAction = () => {};
</script>
<style>
    input {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ffffff;
        color: #ffffff!important;
        color-scheme: dark;
    }
    input::placeholder {
        color: #ffffff;
    }

</style>
<input on:click={inputAction} type={type} name={name} placeholder={placeholder} />
