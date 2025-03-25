<template>
  <div>
    <Subheading label="Filter by category" data-aos="fade-left" />

    <div class="flex flex-wrap gap-2">
      <div v-for="(item, index) in data" :key="index" data-aos="zoom-in" :data-aos-delay="(index + 1) * 150">
        <NuxtLink
          :to="`/category/${item.slug}`"
          class="inline-flex items-center h-[30px] px-3 uppercase tracking-widest bg-zinc-900 font-medium text-[11px] rounded">
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/categories')
</script>

<style lang="scss" scoped>
a.router-link-active {
  @apply bg-accent text-black;
}
</style>
