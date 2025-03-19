<template>
  <div></div>
</template>

<script setup>
const route = useRoute()

const { data } = await useFetch(`/api/projects/${route.params.slug}`)

useSeoMeta({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Portfolio`,
  description: data.value && data.value.seo ? data.value.seo.description : null
})
</script>
