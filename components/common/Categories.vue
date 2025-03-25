<template>
  <div class="flex flex-wrap">
    <div v-for="(item, index) in props.items" :key="index">
      <NuxtLink
        :to="`/category/${item.slug}`"
        class="uppercase tracking-widest font-normal text-sm hover:text-accent transition-all duration-150">
        {{ item.name }}<span class="mx-1 text-zinc-500" v-if="index < props.items.length - 1">/</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>

<style lang="scss" scoped>
a.router-link-active {
  @apply text-accent;
}
</style>
