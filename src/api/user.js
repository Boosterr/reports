import api from './index'

/**
 * Login user
 *
 * @param email
 * @param password
 * @return {*}
 */
export const loginRequest = (id, email, password) => {
  return api
    .request('login')
    .withBody({
      id: id,
      username: email,
      password: password
    })
    .withIncludes([])
    .post()
}

/**
 * Logout user
 *
 * @return {*}
 */
export const logoutRequest = () => {
  return api.request('logout').delete()
}

/**
 * Get all users
 *
 * @param params
 * @param includes
 * @return {*}
 */
export const getAllUsersRequest = (params, includes = []) => {
  return api
    .request('users')
    .withParams(params)
    .withIncludes(includes)
    .get()
}

/**
 * Get counters of authenticated user
 *
 * @return {*}
 */
export const getCountersRequest = () => {
  return api.request('user/counters').get()
}
