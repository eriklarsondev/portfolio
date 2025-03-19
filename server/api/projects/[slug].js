export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const project = await $fetch(`${config.basePath}/projects/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return project
})
