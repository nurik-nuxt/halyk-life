<template>
  <div style="padding: 15px">
    This is document card
    <DocumentCard
        v-for="(document,index) in documents"
        :fileTypeName="document.fileTypeName"
        :id="index"
        :file-list="fileList"
        :file-name="document.fileName"
        :document="document"
        @uploadFile="uploadFile($event,document)"
    />
  </div>
</template>

<script setup>
import {computed} from "vue";
import { useDocumentStore } from '~/stores/documents'

const store = useDocumentStore()
store.fetchDocuments({
  body: {
    processInstanceId:"0370c1fd-3b3d-4974-a0cb-23e8ccc727cd"
  }
})

const documents = computed(() => {
  return store.documents
})
const fileList = ref([]);

 </script>