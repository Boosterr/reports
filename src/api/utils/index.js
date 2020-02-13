import { axios } from '../../utils/axios'
import { defaults } from '../../config'

/**
 * Initialize response interceptors
 *
 * @param vm
 */
export const initializeResponseInterceptors = vm => {
  axios.interceptors.response.use(
    interceptors.onSuccess.bind(vm),
    interceptors.onError.bind(vm)
  )
}

/**
 * Response interceptors
 */
const interceptors = {
  /**
   * Error interceptor
   *
   * @param error
   * @return {Promise<never>}
   */
  onError: function (error) {
    const response = error.response

    if (response && response.status === 401 && this.$ls.get('access_token')) {
      this.$notificationShow('You have been logged out')

      const isSameRoute =
        defaults.authorizationFallbackRoute === this.$route.name
      !isSameRoute && this.$router.push({ name: 'login' })

      /**
       * Set flag that error is notified through UI
       *
       * @type {boolean}
       */
      error.isNotified = true
    }

    return Promise.reject(error)
  },

  /**
   * Success interceptor
   *
   * @param response
   * @return {*}
   */
  onSuccess (response) {
    return response
  }
}
