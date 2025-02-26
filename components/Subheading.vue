<template>
  <h4
    :class="[
      'mb-2 uppercase tracking-widest font-sans font-medium text-xs',
      { 'text-accent': !props.muted, 'text-zinc-500': props.muted }
    ]">
    <div class="mr-1" v-if="slots.icon">
      <slot name="icon" />
    </div>
    {{ props.label }}
  </h4>
</template>

<script setup>
const props = defineProps(['label', 'muted'])
const slots = useSlots()
</script>
