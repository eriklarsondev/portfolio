<template>
  <NuxtLink
    :to="props.url"
    :target="!props.tab ? '_self' : '_blank'"
    class="inline-flex items-center h-[50px] px-8 shadow-lg shadow-black/20 uppercase tracking-widest bg-accent font-medium text-sm text-black hover:-translate-y-2 transition-all duration-300">
    <span class="relative">
      <div class="mr-1" v-if="slots.icon">
        <slot name="icon" />
      </div>
      {{ props.label }}
    </span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['label', 'url', 'tab'])
const slots = useSlots()
</script>
