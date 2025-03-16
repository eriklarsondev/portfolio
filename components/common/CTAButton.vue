<template>
  <NuxtLink
    :to="props.url"
    :target="!props.tab ? '_self' : '_blank'"
    class="inline-flex items-center h-[60px] px-8 uppercase tracking-widest bg-zinc-200 hover:bg-black font-medium text-xs text-black hover:text-white transition-all duration-300">
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
