<template>
  <h4
    :class="[
      'mb-2 uppercase tracking-widest font-sans font-medium text-xs',
      { 'text-accent': !props.muted, 'text-zinc-500': props.muted }
    ]">
    {{ props.label }}
  </h4>
</template>

<script setup>
const props = defineProps(['label', 'muted'])
</script>
