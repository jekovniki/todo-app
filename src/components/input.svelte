<script lang="typescript">
    export let type = "", name = "", placeholder = "", inputAction = () => {}, required = false;
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

    input[name="color"] {
        background: linear-gradient(#e66465, #9198e5);
    }

</style>
<input on:click={inputAction} type={type} name={name} placeholder={placeholder} required={required} />
