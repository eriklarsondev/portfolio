<template>
  <div>
    <PageHero slug="blog" />

    <Container class="mb-20">
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <Articles :data="data" />
        </div>

        <div class="lg:w-[350px] w-full">
          <CategoryFilter />
        </div>
      </div>
    </Container>

    <LeadContainer />
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/articles?limit=10')

definePageMeta({ layout: 'basic' })
</script>
