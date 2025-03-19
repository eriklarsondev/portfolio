export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const service = await $fetch(`${config.basePath}/services/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return service
})
