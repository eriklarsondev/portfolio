export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const page = await $fetch(`${config.basePath}/pages/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return page
})
