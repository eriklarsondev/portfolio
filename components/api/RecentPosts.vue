<template>
  <div class="py-20 border-t-4 border-zinc-900">
    <Container>
      <Heading label="Join the conversation" data-aos="flip-left" />

      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <Articles :data="data" />
        </div>

        <div class="lg:w-[350px] w-full">
          <CategoryFilter />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/articles?limit=2')
</script>
