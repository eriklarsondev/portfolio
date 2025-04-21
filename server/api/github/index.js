export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const query = getQuery(event)

  const repos = await $fetch(config.public.githubPath, {
    headers: {}
  })

  if (!query.limit) {
    if (repos.length > 9) repos.length = 9
  } else {
    if (repos.length > query.limit) repos.length = query.limit
  }
  return repos
})
