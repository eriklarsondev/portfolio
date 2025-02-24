export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const tech = await $fetch(`${config.basePath}/technologies`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return tech
})
