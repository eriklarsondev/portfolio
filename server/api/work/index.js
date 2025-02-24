export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const experience = await $fetch(`${config.basePath}/experience`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return experience
})
