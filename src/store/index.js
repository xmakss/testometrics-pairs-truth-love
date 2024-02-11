import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      womanName: '',
      manName: '',
    }
  },
  mutations: {
    manName (state, name) {
      state.manName = name
    },
    womanName (state, name) {
      state.womanName = name
    },
  }
})