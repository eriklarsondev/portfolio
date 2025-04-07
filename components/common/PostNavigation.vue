<template>
  <div class="post-nav relative py-20 border-t-4 border-zinc-900">
    <Container>
      <div class="flex lg:flex-row flex-col lg:gap-40 gap-20">
        <div :class="['flex-1', { 'lg:block hidden': !props.prev }]">
          <Subheading label="Previous" class="lg:block hidden" v-if="props.prev" />

          <Post :data="props.prev" :condensed="true" v-if="props.prev" />
        </div>

        <div :class="['flex-1', { 'lg:block hidden': !props.next }]">
          <Subheading label="Next" class="lg:block hidden" v-if="props.next" />

          <Post :data="props.next" :condensed="true" v-if="props.next" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const props = defineProps(['prev', 'next'])
</script>

<style lang="scss" scoped>
.post-nav::before {
  @apply lg:block hidden absolute content-[''] top-0 left-[calc(50%_-_2px)] w-[4px] h-full bg-zinc-900;
}
</style>
