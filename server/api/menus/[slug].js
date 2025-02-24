export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const slug = getRouterParam(event, 'slug')

  const menu = await $fetch(`${config.basePath}/menus/${slug}`, {
    headers: {
      authorization: `Bearer ${config.apiToken}`
    }
  })
  return menu
})
