export {}

declare module 'vue-router' {
  interface RouteMeta {
    hidden?: boolean
    title?: string
    icon?: string
  }
}
