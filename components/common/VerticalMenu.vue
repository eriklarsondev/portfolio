<template>
  <ul class="relative sm:pl-10 pl-6">
    <li v-for="(item, index) in props.items" :key="index" class="block relative">
      <div>
        <h4 class="m-0">{{ item.name }}</h4>
        <p class="mb-1 line-clamp-2 lg:leading-6 leading-7 lg:text-sm text-base">
          {{ item.description ? item.description : '&mdash;' }}
        </p>

        <NavLink label="Learn more" :url="`/${props.base}/${item.slug}`" class="[&]:text-accent" />
      </div>

      <hr class="my-4" v-if="index < props.items.length - 1" />
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['items', 'base'])
</script>

<style lang="scss" scoped>
ul::before {
  @apply absolute content-[''] top-0 left-0 w-1 h-full bg-zinc-700 rounded-full;
}
</style>
