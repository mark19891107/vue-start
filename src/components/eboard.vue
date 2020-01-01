<template>
  <div>
    <h1>eboard</h1>
    {{lots_color}}
  </div>
</template>

<script>
import {store} from '../store'
export default {
  name: "eboard",
  props: {
    tabindex: Number
  },
  computed: {
    lots_color(){
        var tmp = store.state.tabs[this.$props.tabindex].selected_lots
        return tmp.map(lot=>lot.color)
    }
  }
};
</script>

<style scoped>
</style>