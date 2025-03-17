<template>
  <h1
    :class="[
      'mb-8 font-heading font-normal',
      {
        'xl:text-7xl md:text-6xl sm:text-5xl text-[10vw]': !props.cta,
        'text-zinc-800': props.muted,
        'md:text-[7rem] sm:text-[13vw] text-[18vw]': props.cta
      }
    ]">
    <span
      :class="{
        'leading-tight': !props.cta,
        'lg:leading-none md:leading-[7rem] sm:leading-[13vw] leading-[18vw]': props.cta
      }">
      <span v-if="props.label">{{ props.label }}<span class="text-accent" v-if="!props.muted">.</span></span>
      <slot v-if="!props.label" />
    </span>
  </h1>
</template>

<script setup>
const props = defineProps(['label', 'muted', 'cta'])
</script>
