<template>
  <div>
    <Typed :options="config" v-if="data">
      <h1 class="m-0 xl:text-6l md:text-5xl sm:text-4xl text-[7vw]">
        <span class="leading-tight"><span class="typing"></span><span class="text-accent">_</span></span>
      </h1>
    </Typed>

    <Error v-if="!data">{{ props.slug }} was not found</Error>
  </div>
</template>

<script setup>
const props = defineProps(['slug'])

const { data } = await useFetch(`/api/typed/${props.slug}`)

const config = {
  strings: data.value && data.value.items ? data.value.items : [],
  loop: true,
  showCursor: false,
  typeSpeed: 100
}
</script>
