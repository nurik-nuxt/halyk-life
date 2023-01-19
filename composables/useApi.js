import { $fetch } from 'ohmyfetch'
import { useMainStore } from '~/stores/main'
import { useAuthStore } from '~/stores/auth'
import Cookies from 'js-cookie'

const useApi = async (uri, options, withContentType = true) => {
    const mainStore = useMainStore()
    const authStore = useAuthStore()
    const { apiBaseUrl } = useRuntimeConfig().public

    mainStore.spinning = true

    const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${authStore.accessToken}`,
    }

    if (withContentType) {
        headers['Content-Type'] = 'application/json'
    }

    try {
        const response = await $fetch(`${apiBaseUrl}${uri}`, {
            ...options,
            headers,
        })

        mainStore.spinning = false

        return response
    } catch (e) {
    }
}

export default useApi
