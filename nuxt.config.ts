import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default({
    vite: {
        plugins: [
            Components({
                resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    modifyVars: {
                        'primary-color': '#009C73',
                        'text-color': 'rgba(0, 0, 0, .65)',
                        'link-color': '#009C73',
                    },
                },
            },
        },
    },

    build: process.env.NODE_ENV === 'production'
        ? { transpile: ['dayjs', 'lodash', '@babel/runtime'] }
        : {},

    modules: ['@pinia/nuxt', '@vueuse/nuxt'],

    runtimeConfig: {
        public: {
            apiBaseUrl: 'https://products.halyklife.kz/api/v1/test/insis/arm/api',
            authBaseUrl: 'https://products.halyklife.kz/api/v1/test/insis/identity/api',
        },
    },

    vue: {
        compilerOptions: {
            directiveTransforms: {
                test: () => ({
                    props: [],
                    needRuntime: true
                })
            }
        }
    },

    css: [
        '~/assets/css/variables.css'
    ],
})
