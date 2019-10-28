<script>
  import { onMount } from "svelte";
  import { itemStore } from "./store";

  let value;

  onMount(() => {
    value = "";
  });

  const handleAddItem = () => {
    itemStore.addItem(value);
    value = "";
  };
</script>

<style>
  [disabled] {
    color: graytext;
  }
</style>

<input type="text" bind:value placeholder="Item name" />
<button on:click={handleAddItem} disabled={!value} class:disabled={!value}>
  Add Item
</button>
