export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const heading = await $fetch(`${config.basePath}/typed-headings/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return heading
})
