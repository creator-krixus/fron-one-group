export default {
  namespaced: true,
  state: {
      token: null
  },
  mutations: {
    setToken(state, payload){
        state.token = payload
    }
  },
  actions: {
    async login({commit}, usuario){
        try {
            const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/users/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario)
            })
            const resDB = await res.json()
            commit('setToken', resDB.token)
            localStorage.setItem('token', resDB.token)
        } catch (error) {
            console.log(error)
        }
    }
  }
};