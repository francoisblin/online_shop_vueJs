import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const product = {
  namespaced: true,
  state: {
    datas: []
  },
  mutations: {
    addMany (state, products) {
      state.datas = products
    },
    addOne (state, product) {
      state.datas.push(product)
    }
  },
  actions: {
    fetchDatas (context) {
      axios.get('products.json')
        .then(res => {
          const data = res.data
          context.commit('addMany', Object.keys(data).map(key => data[key]))
        })
    },
    saveOne (context, product) {
      axios.post('products.json', product)
        .then(() => {
          context.commit('addOne', product)
        })
    }
  }
}

const cart = {
  namespaced: true,
  state: {
    datas: []
  },
  mutations: {
    addOne (state, product) {
      state.datas.push(product)
    },
    deleteOne (state, id) {
      const index = state.datas.findIndex(d => d.id === id)
      state.datas.splice(index, 1)
    }
  },
  getters: {
    total (state) {
      return state.datas.reduce((acc, p) => {
        acc += p.price
        return acc
      }, 0)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    product,
    cart
  }
})

export default store
