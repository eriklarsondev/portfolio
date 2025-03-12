<template>
  <div>
    <Typed :options="config" v-if="data">
      <h1 class="m-0 tracking-wide font-heading font-normal xl:text-6xl md:text-5xl sm:text-4xl text-[7vw]">
        <span class="leading-tight"><span class="typing"></span><span class="text-accent">_</span></span>
      </h1>
    </Typed>

    <Error v-if="!data">{{ props.slug }} was not found</Error>
  </div>
</template>

<script setup>
import { Typed } from '@duskmoon/vue3-typed-js'

const props = defineProps(['slug', 'once'])

const { data } = await useFetch(`/api/typed/${props.slug}`)

const config = {
  strings: data.value ? data.value.items : [],
  loop: !props.once ? true : false,
  showCursor: false,
  typeSpeed: 100
}
</script>
