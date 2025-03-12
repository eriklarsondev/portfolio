<template>
  <div>
    <div
      class="grid xl:grid-cols-3 grid-cols-1 xl:gap-x-10 xl:gap-y-20 xl:max-w-full max-w-3xl mx-auto"
      v-if="data && data.length">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="xl:text-center"
        data-aos="fade-right"
        :data-aos-delay="(index + 1) * 150">
        <em class="font-serif text-8xl text-accent">0{{ item.order }}</em>

        <h2 class="mt-1 mb-0 xl:text-3xl md:text-4xl text-3xl">{{ item.name }}</h2>
        <div class="inline-block mt-2 xl:ml-3 text-left" v-if="item.content">
          <span
            class="strategy-content relative xl:leading-7 md:leading-10 leading-9 font-serif xl:text-base md:text-3xl text-2xl"
            v-html="item.content"></span>
        </div>

        <hr class="xl:hidden block my-10" v-if="index < data.length - 1" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Strategies not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/strategies')
</script>

<style lang="scss">
.strategy-content {
  &::before {
    @apply xl:block hidden absolute content-[''] top-0 -left-3 w-1 h-full bg-zinc-700 rounded-full;
  }

  p {
    @apply m-0;
  }
}
</style>
