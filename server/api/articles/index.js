export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const query = getQuery(event)

  const articles = await $fetch(`${config.basePath}/articles?featured=${query.limit}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return articles
})
