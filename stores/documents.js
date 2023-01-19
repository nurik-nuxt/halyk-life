import {defineStore} from "pinia";
import {useRuntimeConfig} from "nuxt/app";
import useApi from "~/composables/useApi";

export const useDocumentStore = defineStore('document',{
    state () {
        return {
            documents : null
        }
    },
    actions: {
        async fetchDocuments({ body }) {

            try {
                let data = await useApi(`/File/List`,{
                    method: 'POST',
                    body
                })
                this.documents = data
            } catch (e) {
                console.log(e)
            }
        },

        async addDocument(body) {
            try {
                let resp = await useApi(`/File/UploadFiles`, {
                    method: 'POST',
                    body
                }, false)
                console.log(resp[0])
                await this.fetchDocuments({
                    body: {
                        processInstanceId: resp[0].processInstanceId
                    }
                })
            } catch (error) {
                console.log(error.response)
            }

        }
    }
})