<template>
  <div class="my-32"></div>
</template>

<script setup>
const config = useRuntimeConfig()

onMounted(() => {
  const elem = document.createElement('script')

  elem.setAttribute(
    'src',
    `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsApiKey}&libraries=maps,marker&v=beta`
  )
  elem.setAttribute('defer', true)

  document.head.appendChild(elem)
})
</script>
