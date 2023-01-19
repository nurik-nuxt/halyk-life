<template>
  <a-card
      style="margin-bottom: 15px"
  >
    <h2>Наименование</h2>
    <div>
      {{ id + 1}}.{{ fileTypeName }}
    </div>
    <div style="color: #009C73; margin-bottom: 15px">
      <snippets-outlined style="color: #009C73" />
      {{ fileName }}
    </div>
    <a-upload
        name="file"
        :file-list="fileList"
        @change="uploadFile"
        :before-upload="beforeUpload"
    >
      <p style="margin: 0">
        Вложить
        <plus-circle-outlined />
      </p>
    </a-upload>
  </a-card>
</template>

<script setup>
import { PlusCircleOutlined, SnippetsOutlined } from "@ant-design/icons-vue";
import { useDocumentStore } from '~/stores/documents'
const store = useDocumentStore()

const props =defineProps({
  fileTypeName: String,
  id: Number,
  fileName: String,
  document: Object
})
const fileList = ref([]);

function uploadFile(info) {
  const files = fileList.value
  const formData = new FormData()
  const document = {
    processInstanceId: props.document.processInstanceId,
    fileTypeCode: props.document.fileTypeCode,
    page: props.document.page,
    fileName: info.file.name
  }
  const documents = [document]
  files.forEach(file => {
    formData.append('file',file)
    // formData.append('fileData', JSON.stringify(documents))
  })
  store.addDocument(
      formData
  )
}
function beforeUpload(file) {
  fileList.value = [...fileList.value, file]
  return false
}
</script>