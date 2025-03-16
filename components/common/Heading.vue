<template>
  <h1
    :class="[
      'mb-8 font-heading font-normal',
      {
        'xl:text-7xl md:text-6xl sm:text-5xl text-[9vw]': !props.cta,
        'text-zinc-800': props.muted,
        'md:text-[8rem] sm:text-[10vw] text-[18vw]': props.cta
      }
    ]">
    <span
      :class="{
        'leading-tight': !props.cta,
        'lg:leading-none md:leading-[9vw] sm:leading-[10vw] leading-[18vw]': props.cta
      }">
      <span v-if="props.label">{{ props.label }}<span class="text-accent" v-if="!props.muted">_</span></span>
      <slot v-if="!props.label" />
    </span>
  </h1>
</template>

<script setup>
const props = defineProps(['label', 'muted', 'cta'])
</script>
