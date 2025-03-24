export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const article = await $fetch(`${config.basePath}/articles/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return article
})
