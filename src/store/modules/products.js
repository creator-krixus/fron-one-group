export default {
    namespaced: true,
    state: {
        products: null
    },
    mutations: {
      setProducts(state, payload){
          state.products = payload
      }
    },
    actions: {
      async getProducts({commit}){
          try {
              const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/products`, {
                  method: 'GET',
              })
              const response = await res.json()
              commit('setProducts', response)
              return response
          } catch (error) {
              console.log(error)
          }
      }
    }
  };