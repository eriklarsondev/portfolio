<template>
  <h1
    :class="[
      'mb-8 tracking-wide font-heading font-normal',
      {
        'xl:text-6xl md:text-5xl sm:text-4xl text-[8vw]': !props.cta,
        'text-zinc-700': props.muted,
        'xl:text-8xl md:text-7xl text-[8vw]': props.cta
      }
    ]">
    <span :class="{ 'leading-tight': !props.cta, 'md:leading-none leading-tight': props.cta }">
      <span v-if="props.label">{{ props.label }}<span class="text-accent" v-if="!props.muted">_</span></span>
      <slot v-if="!props.label" />
    </span>
  </h1>
</template>

<script setup>
const props = defineProps(['label', 'muted', 'cta'])
</script>
