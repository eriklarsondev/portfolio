export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const services = await $fetch(`${config.basePath}/services`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return services
})
