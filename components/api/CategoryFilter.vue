<template>
  <div>
    <div v-if="data && data.length">
      <Subheading label="Filter by category" data-aos="fade-left" />

      <div class="flex flex-wrap gap-2">
        <div v-for="(item, index) in data" :key="index" data-aos="zoom-in" :data-aos-delay="(index + 1) * 100">
          <NuxtLink
            :to="`/category/${item.slug}`"
            class="inline-flex items-center h-[26px] px-5 uppercase tracking-widest bg-zinc-900 hover:bg-zinc-700 font-medium text-[10px] rounded-full transition-all duration-150">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>

      <hr />

      <div data-aos="fade-up">
        <Subheading :label="`There are ${data.length} categories in this blog`" :muted="true" class="[&]:text-xs" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Categories not found</Error>
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
