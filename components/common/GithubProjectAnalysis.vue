<template>
  <div>
    <Subheading label="Project breakdown" class="[&]:-mb-3" data-aos="fade-down" />

    <div
      v-for="(value, key, index) in analysis"
      :key="index"
      class="mt-5"
      data-aos="fade-left"
      :data-aos-delay="(index + 1) * 150">
      <Subheading :label="`${key} (${(value / count) * 100}%)`" :muted="true" class="[&]:mb-1 [&]:text-xs" />

      <div class="relative h-[15px] bg-zinc-900 rounded-full">
        <div
          class="absolute top-0 left-0 h-full bg-accent rounded-full"
          :style="{ width: `${(value / count) * 100}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

const analysis = ref({})
const count = ref(0)

onMounted(() => {
  props.data.forEach(project => {
    if (project.language === null) project.language = 'N/A'

    count.value++
    if (analysis.value.hasOwnProperty(project.language)) {
      analysis.value[project.language]++
    } else {
      analysis.value[project.language] = 1
    }
  })
})
</script>

<style lang="scss" scoped>
progress {
  @apply block w-full h-[20px] rounded-full;
}
</style>
