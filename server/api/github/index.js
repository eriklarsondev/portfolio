export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const repos = await $fetch(config.public.githubPath, {
    headers: {}
  })

  if (repos.length > 9) {
    repos.length = 9
  }
  return repos
})
