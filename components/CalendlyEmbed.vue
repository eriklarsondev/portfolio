<template>
  <div>
    <div
      class="calendly-inline-widget w-full h-[700px]"
      :data-url="`${config.public.calendlyPath}?hide_landing_page_details=1&hide_gdpr_banner=1`"></div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

onMounted(() => {
  const elem = document.createElement('script')

  elem.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
  elem.setAttribute('async', true)

  document.head.appendChild(elem)
})
</script>
