<script>
  import TodoHeader from "./TodoHeader.svelte";
  import TodoList from "./TodoList.svelte";
  import { itemStore } from "./store";
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  <div>Total item: {$itemStore.length}</div>
  <TodoHeader />
  <TodoList />
</main>
