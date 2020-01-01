import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tabs: []
    },
    mutations: {
        loadTabs(state,payload){
            state.tabs = payload;
        },
        setSelectedLots(state, payload){
            state.tabs[payload.tabindex].selected_lots = payload.selected_lots;
        },
        addTab(state, payload){
            state.tabs.push(payload);
        },
        removeTab(state,tabindex){
            state.tabs.splice(tabindex,1)
        }
    },
    strict: true
});