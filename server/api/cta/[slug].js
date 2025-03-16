export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const cta = await $fetch(`${config.basePath}/ctas/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return cta
})
