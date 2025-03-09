export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const strategies = await $fetch(`${config.basePath}/strategies`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return strategies
})
