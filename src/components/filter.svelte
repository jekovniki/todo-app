<script lang="typescript">
    import { todoList, storage } from "../stores/index";
	import Input from "./input.svelte";
    import Options from "./options.svelte";
    import { querySelector, values } from "../utils/config";
    
    const options = [];
    $todoList.filter(tile => {
        options.push(tile.color ?? "");
    });
    
    const defaultState = JSON.parse(JSON.stringify(storage.getData()));
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
            $todoList = defaultState;
        }
    }

    const filterByUnresolved = () => {
        if (inputChecked.unresolved === false) {
            inputChecked.unresolved = !inputChecked.unresolved;
            const list = $todoList.filter(item => item.completed === false);
            
            $todoList = list;
        } else {
            inputChecked.unresolved = !inputChecked.unresolved;
            $todoList = defaultState;
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
    #filter {
        margin-bottom:1rem;
    }
</style>

<section id="filter">
    <div>Filter todo's</div>
    <div class="filter-options">
        <div class="column">
            <label for="resolved">Resolved</label>
            <Input type="checkbox" name="resolved" inputAction={filterByResolved} />
        </div>
        <div class="column">
            <label for="unresolved">Unresolved</label>
            <Input type="checkbox" name="unresolved" inputAction={filterByUnresolved} />
        </div>
        <Options label="Color" options={[... new Set(options)]} optionsEvent={filterByColor}/>
    </div>
</section>