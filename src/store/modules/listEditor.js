export default {
  state: {
    list: '',
    listSecond: '',
    info: [],
    rental: [],
    sales: []
  },
  getters: {
    getList: state => {
      return state.list
    },
    getInfo: state => {
      return state.info
    },
    getSales: state => {
      return state.sales
    },
    getRental: state => {
      return state.rental
    }
  },
  mutations: {
    setList: (state, data) => {
      state.list = data
    },
    setNewObjWithInfo: (state, data) => {
      state.info.push(data)
    },
    objRental: (state, data) => {
      state.rental.push(data)
    },
    objSales: (state, data) => {
      state.sales.push(data)
    }
  }
}
