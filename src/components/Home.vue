<script >

export default {

  computed:{
    todos(){
      return this.$store.state.todos
    }
  }
}
</script>

<template>
<h4>home component</h4>
  <h5 v-for="todo in todos" :key="todo.id">
    {{ todo.text}}

  </h5>
</template>

<style scoped>

</style>
