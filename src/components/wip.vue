<template>
  <div>
    <b-table selectable=""
    :items="items"  
    :select-mode="'range'" 
    @row-selected="rowSelected"></b-table>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
import { store } from "../store"
export default {
  name: "wip",
  props: {
    tabindex: Number
  },
  components: {
    "b-table": BTable
  },
  data() {
    return {
      items: [
        {
          color: "red",
          value: "#f00"
        },
        {
          color: "green",
          value: "#0f0"
        },
        {
          color: "blue",
          value: "#00f"
        },
        {
          color: "cyan",
          value: "#0ff"
        },
        {
          color: "magenta",
          value: "#f0f"
        },
        {
          color: "yellow",
          value: "#ff0"
        },
        {
          color: "black",
          value: "#000"
        }
      ]
    };
  },
  methods: {
    rowSelected(data) {
        store.commit('setSelectedLots',{tabindex:this.$props.tabindex,selected_lots:data});
    }
  }
};
</script>

<style scoped>
</style>