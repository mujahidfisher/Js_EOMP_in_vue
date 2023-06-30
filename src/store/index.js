import { createStore } from 'vuex' 

export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts(context) {
      try{
        let response = await fetch ("https://mujahidfisher.github.io/Json-server1/code.json")
        let { products } = await response.json()
          context.commit("setProducts", products)
       
      }catch(e) {
        console.log("nothing to see here");
      }
    }
  },
  modules: {
  }
})
