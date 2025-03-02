export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const sidebar = await $fetch(`${config.basePath}/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return sidebar
})
