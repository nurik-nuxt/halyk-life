import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth"
declare module "/Users/nursultannurtuganuly/Desktop/PhpStormProjects/halyk-life/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}