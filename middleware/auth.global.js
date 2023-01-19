import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    let { isAuthenticated } = useAuthStore()

    if (to.name === '/') {
        return navigateTo({ name: 'documents' })
    }
    if (to.name === 'login') {
        if (isAuthenticated) {
            return navigateTo({ name: 'documents' })
        }
    } else {
        if (!isAuthenticated) {
            return navigateTo({ name: 'login' })
        }
    }
})
