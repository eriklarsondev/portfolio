<template>
  <div class="html-content leading-9 font-extralight text-zinc-300">
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
.html-content {
  pre[class*='language-'].line-numbers {
    @apply my-8 shadow-none bg-zinc-900 text-[15px] border-0 rounded-md;

    .line-numbers-rows {
      @apply border-r-2 border-zinc-700;
    }
  }

  strong {
    @apply font-light;
  }

  a {
    @apply underline underline-offset-4 text-accent;
  }
}
</style>
