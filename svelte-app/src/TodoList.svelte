<script>
  import { itemStore } from "./store";

  const handleRemoveItem = item => {
    itemStore.removeItem(item);
  };
</script>

<style>
  ul {
    list-style-type: none;
  }
</style>

<ul>
  {#each $itemStore as item}
    <li>
      {item}
      <button on:click={() => handleRemoveItem(item)}>Remote Item</button>
    </li>
  {/each}
  {#if $itemStore.length === 0}
    <div>There is not any item added. Please add one</div>
  {/if}
</ul>
