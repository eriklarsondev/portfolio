<template>
  <div>
    <PageHero slug="blog" />

    <Container class="mb-20">
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1"></div>

        <div class="lg:w-[350px] w-full"></div>
      </div>
    </Container>

    <LeadContainer />
  </div>
</template>

<script setup>
definePageMeta({ layout: 'basic' })
</script>
