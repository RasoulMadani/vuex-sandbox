<script >

export default {

  computed:{
    doneTodos(){
      return this.$store.state.todos.filter(todo=>{
        if(todo.done === true){
          return todo;
        }
      })
    },
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
  Done Todo:
  <h5 v-for="todo in doneTodos" :key="todo.id">
    {{ todo.text}}

  </h5>
</template>

<style scoped>

</style>
