<template>
  <div id="app">
    <b-tabs content-class="mt-3">
      <b-tab vfor  v-for="(tab, index) in tabs" :key="tab.id">
        <template v-slot:title>
          {{tab.title}} <span @click.prevent="closeTab(index)" class="badge badge-danger">×</span>
        </template>
        <Tool :tabindex="index" />
      </b-tab>
      <!-- New Tab Button (Using tabs-end slot) -->
      <template v-slot:tabs-end>
        <b-nav-item @click.prevent="newTab" href="#">
          <b>+</b>
        </b-nav-item>
      </template>
    </b-tabs>
  </div>
</template>

<script>
import { store } from "./store";
import { BTabs, BTab, BNavItem } from "bootstrap-vue";
import Tool from "./components/tool";
export default {
  name: "app",
  components: {
    "b-tabs": BTabs,
    "b-tab": BTab,
    "b-nav-item": BNavItem,
    Tool
  },
  computed: {
    tabs() {
      localStorage.setItem("CHDAIB", JSON.stringify(store.state.tabs));
      return store.state.tabs;
    }
  },
  beforeCreate() {
    var tabs_config = localStorage.getItem("CHDAIB");
    if (tabs_config === null) {
      store.commit("loadTabs", []);
    } else {
      store.commit("loadTabs", JSON.parse(tabs_config));
    }
  },
  methods: {
    newTab() {
      store.commit("addTab", {
        type: "tool",
        title: "ABC-" + (this.tabs.length + 1),
        eqpid: "ABC-" + (this.tabs.length + 1),
        selected_lots: []
      });
    },
    closeTab(tabindex){
      if(confirm("確定要關閉"+store.state.tabs[tabindex].title+"頁籤嗎")){
        store.commit('removeTab',tabindex)
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
