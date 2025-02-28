export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const testimonials = await $fetch(`${config.basePath}/testimonials`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return testimonials
})
