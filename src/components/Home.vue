<script >
export default {
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
}
</script>

<template>
<h4>home component</h4>
  <h4>{{count}}</h4>
</template>

<style scoped>

</style>
