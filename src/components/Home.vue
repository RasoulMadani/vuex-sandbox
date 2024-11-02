<script >

import {useStore} from "vuex";
import {computed} from "vue";

export default {

  // computed:{
  //   doneTodos(){
  //     return this.$store.getters.doneTodos
  //   },
  //   todos(){
  //     return this.$store.state.todos
  //     }
  //   }
  setup(){
    const store = useStore();
    const doneTodos =  computed(()=>store.getters.doneTodos);
    const getTodoById =  computed(()=>store.getters.getTodoById(1));
    return {
      doneTodos,getTodoById
    }
  }
}
</script>

<template>
<h4>home component</h4>
<!--  <h5 v-for="todo in todos" :key="todo.id">-->
<!--    {{ todo.text}}-->

<!--  </h5>-->
  Done Todo:
  <h5 v-for="todo in doneTodos" :key="todo.id">
    {{ todo.text}}

  </h5>
  <h1>{{getTodoById.id}}</h1>
</template>

<style scoped>

</style>
