import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { useMainStore } from '~/stores/main'
import {useRuntimeConfig} from "nuxt/app";

export const useAuthStore = defineStore('auth', {
    state () {
        return {
            accessToken: useCookie('accessToken')
        }
    },
    actions: {
        async login({ body, successCallback=()=>{}, errorCallback=()=>{} }) {

            const { authBaseUrl } = useRuntimeConfig().public

            // @ts-ignore
            try {
                let data  = await $fetch(`${authBaseUrl}/Account/login`, {
                    method: 'POST',
                    body,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                Cookies.set('accessToken', data.accessToken, { path: '/', expires: 7 })
                Cookies.set('refreshToken', data.refreshToken, { path: '/', expires: 7 })
                this.accessToken = data.accessToken
                successCallback(data)
            } catch(error) {
                errorCallback(error)
                throw error
            }
        }
    },

    getters: {
        isAuthenticated(state) {
            return !!state.accessToken
        }
    }
})