<template>
  <div class="leading-9 font-extralight text-zinc-300">
    <div v-html="props.html"></div>
  </div>
</template>

<script setup>
import Prism from '~/composables/usePrism'

const props = defineProps(['html'])

onMounted(() => {
  const elements = document.querySelectorAll('pre')
  elements.forEach(element => {
    element.classList.add('line-numbers')
  })
  Prism.highlightAll()
})
</script>

<style lang="scss">
pre[class*='language-'].line-numbers {
  @apply my-8 shadow-none bg-zinc-900 text-[15px] border-0 rounded-md;

  .line-numbers-rows {
    @apply border-r-2 border-zinc-700;
  }
}
</style>
