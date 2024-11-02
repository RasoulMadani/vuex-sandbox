<script >
import {mapState, useStore} from "vuex";
import {computed} from "vue";

export default {
  computed: mapState(['count'])
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   }
  // },
  // setup(){
  //   const store = useStore();
  //   const count = computed(()=>store.state.count);
  //   return {
  //     count
  //   }
  // }
}
</script>

<template>
<h4>home component</h4>
  <h4>{{count}}</h4>
</template>

<style scoped>

</style>
