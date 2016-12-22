<template>
  <footer class="footer" v-show="list.length">
				<span class="todo-count">
					<strong>1</strong> item left				</span>
    <ul class="filters">
      <li><a href="#/all" class="selected">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button class="clear-completed" style="display: none;">
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      list:this.$store.state.list
    }
  }
}
</script>
