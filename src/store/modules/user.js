export default {
  state: {
    status: false,
    local: '',
    token: localStorage.getItem('userToken') || ''
  },
  getters: {
    isLoggedIn: state => !!state.token
  },
  mutations: {
    setLoacl (state, token) {
      state.local = token
    }
  }
}
