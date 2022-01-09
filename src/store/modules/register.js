export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
      setUser(state, payload){
          state.User = payload
      }
    },
    actions: {
      async register({commit}, form){
          try {
              const res = await fetch(`https://hack-app-a.herokuapp.com/api/v1/users/register`, {
                  method: 'POST',
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(form)
              })
              const resp = await res.json()
              commit('setUser', resp)
              alert('Registro exitoso')
  
          } catch (error) {
              console.log(error)
          }
      }
    }
  };