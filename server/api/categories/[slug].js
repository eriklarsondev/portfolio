export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const category = await $fetch(`${config.basePath}/categories/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return category
})
