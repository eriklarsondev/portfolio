export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const content = await $fetch(`${config.basePath}/content-blocks/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return content
})
