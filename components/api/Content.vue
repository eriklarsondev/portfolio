<template>
  <div>
    <div class="content-block" v-if="data">
      <div
        :class="{
          'leading-7': !props.long,
          'lg:text-justify leading-9 text-[17.5px] text-zinc-300': props.long
        }"
        v-html="data.content"></div>
    </div>

    <Error v-if="!data">{{ props.slug }} was not found</Error>
  </div>
</template>

<script setup>
const props = defineProps(['slug', 'long'])

const { data } = await useFetch(`/api/content/${props.slug}`)
</script>

<style lang="scss">
.content-block {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply mb-1 uppercase tracking-widest font-sans font-medium text-sm text-accent;
  }

  p:last-of-type {
    @apply mb-0;
  }
}
</style>
