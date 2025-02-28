export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)

  const body = await readBody(event)

  const lead = await $fetch(`${config.basePath}/leads`, {
    method: 'post',
    headers: {
      authorization: `Bearer ${config.apiToken}`
    },
    body: body
  })
  return lead
})
