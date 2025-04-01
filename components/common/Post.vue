<template>
  <div class="flex">
    <div class="post-date sm:block hidden relative w-[120px]">
      <div class="inline-flex flex-col text-center">
        <span class="uppercase font-serif text-2xl text-white">{{ published.month }}</span>
        <span class="font-serif text-5xl text-accent">{{ published.day }}</span>
        <span class="post-year relative mt-1 py-[0.075rem]">
          <span class="relative -top-[1px] font-normal text-sm text-zinc-500">{{ published.year }}</span>
        </span>
      </div>
    </div>

    <div class="flex-1">
      <Categories :items="props.data.categories" class="mb-3" v-if="props.data.categories" />

      <h2 class="mb-1 text-3xl">{{ props.data.name }}</h2>
      <Subheading
        :label="`${published.month} ${published.day}, ${published.year}`"
        :muted="true"
        class="sm:hidden block">
        <template v-slot:icon>
          <font-awesome icon="calendar-day" class="text-accent" />
        </template>
      </Subheading>

      <span class="block mb-5 leading-7">{{ props.data.excerpt ? props.data.excerpt : '&mdash;' }}</span>

      <Button label="Read More" :url="`/blog/${props.data.slug}`" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

const published = ref({ month: null, day: null, year: null })

onMounted(() => {
  const date = new Date(props.data.published)

  published.value.month = date.toLocaleDateString('en-US', { month: 'short' })
  published.value.day = date.toLocaleDateString('en-US', { day: '2-digit' })
  published.value.year = date.toLocaleDateString('en-US', { year: 'numeric' })
})
</script>

<style lang="scss" scoped>
.post-date::before {
  @apply absolute content-[''] top-0 left-[80px] w-[3px] h-full bg-zinc-900 rounded-full;
}

.post-year::before {
  @apply absolute content-[''] top-0 -left-[10px] w-[90px] h-full bg-zinc-900 rounded-l-full;
}
</style>
