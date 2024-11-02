<script >

import {useStore} from "vuex";
import {computed} from "vue";

export default {

  setup(){
    const store = useStore();
    const count =  computed(()=>store.state.count);
    function increment(){
      store.dispatch("increment",{name:2,ali:2});
    }
    return {
      count,
      increment
    }
  }
}
</script>

<template>
<h4>home component</h4>
  <h5>{{count}}</h5>
  <button @click="increment">Increment</button>
</template>

<style scoped>

</style>
