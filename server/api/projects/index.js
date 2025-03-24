export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const query = getQuery(event)

  const projects = await $fetch(`${config.basePath}/projects?featured=${query.featured}&skip=${query.skip}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return projects
})
