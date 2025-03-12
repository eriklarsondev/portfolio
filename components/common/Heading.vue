<template>
  <h1
    :class="[
      'mb-8 font-heading font-normal',
      {
        'xl:text-6xl md:text-5xl sm:text-4xl text-[8vw]': !props.cta,
        'text-zinc-800': props.muted,
        'xl:text-[7vw] md:text-[8vw] sm:text-[9vw] text-[13vw]': props.cta
      }
    ]">
    <span :class="{ 'leading-tight': !props.cta, 'md:leading-none sm:leading-[10vw] leading-[14vw]': props.cta }">
      <span v-if="props.label">{{ props.label }}<span class="text-accent" v-if="!props.muted">_</span></span>
      <slot v-if="!props.label" />
    </span>
  </h1>
</template>

<script setup>
const props = defineProps(['label', 'muted', 'cta'])
</script>
