import api from './index'

export const getReport = () => {
  return api
    .request('reports')
    .withBody({
    })
    .get()
}

export const createSalesRental = (type, name, status) => {
  return api
    .request('reports/rental')
    .withBody({
      report: {
        type: type,
        name: name,
        status: status
      }
    })
    .post()
}

export const createSalesReport = (type, name, status) => {
  return api
    .request('reports/sales')
    .withBody({
      report: {
        type: type,
        name: name,
        status: status
      }
    })
    .post()
}
