export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const categories = await $fetch(`${config.basePath}/categories`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return categories
})
