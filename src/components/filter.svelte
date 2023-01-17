<script lang="typescript">
    import { todoList, storage } from "../stores/index";
	import Input from "./input.svelte";
    import Options from "./options.svelte";
    import { querySelector, values } from "../utils/config";
    
    const inputChecked = {
        resolved: false,
        unresolved: false
    }

    const filterByResolved = () => {
        if (inputChecked.resolved === false) {
            inputChecked.resolved = !inputChecked.resolved;
            const list = $todoList.filter(item => item.completed === true);
            $todoList = list;
        } else {
            inputChecked.resolved = !inputChecked.resolved;
            $todoList = storage.getData();
        }
    }

    const filterByUnresolved = () => {
        if (inputChecked.unresolved === false) {
            inputChecked.unresolved = !inputChecked.unresolved;
            const list = $todoList.filter(item => item.completed === false);
            
            $todoList = list;
        } else {
            inputChecked.unresolved = !inputChecked.unresolved;
            $todoList = storage.getData();
        }
    }

    const filterByColor = () => {
        const color = document.querySelector(querySelector.select);
        if (color === null || 'value' in color && color.value === values.dropdown.disabled) {
            return;
        }
        
        if (color !== null && 'value' in color && color.value === values.dropdown.default) {
            $todoList = storage.getData();
        }
        if (color !== null && 'value' in color && color.value !== values.dropdown.default) {
            const list = $todoList.filter(item => item.color === color.value);
            $todoList = list;
        }
    }

    const resetAllFilters = () => {
        $todoList = storage.getData();
        const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
        
        for (const checkbox of allCheckboxes) {
            
            checkbox.checked = false;
        }

    }
    
</script>
<style>
    .filter-options {
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }
    .column {
        display: flex;
    }

    .column.remove {
        background-color: #ffcccb;
    }
    #filter {
        margin: 3rem 0;
    }
</style>

<section id="filter">
    <div class="filter-options">
        <div class="column">
            <label for="resolved">Resolved</label>
            <Input type="checkbox" name="resolved" inputAction={filterByResolved} />
        </div>
        <div class="column">
            <label for="unresolved">Unresolved</label>
            <Input type="checkbox" name="unresolved" inputAction={filterByUnresolved} />
        </div>
        <Options label="Color" optionsEvent={filterByColor}/>
        <div class="column" on:click={resetAllFilters}>
            Reset all
        </div>
    </div>
</section>