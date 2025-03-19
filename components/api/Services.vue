<template>
  <div>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-8 xl:max-w-full max-w-3xl mx-auto" v-if="data && data.length">
      <div v-for="(item, index) in data" :key="index" data-aos="fade-down" :data-aos-delay="(index + 1) * 150">
        <Card>
          <h2 class="mb-1">
            <span class="text-accent">0{{ index + 1 }}.</span> {{ item.name }}
          </h2>
          <span class="block xl:leading-6 leading-7 xl:text-sm text-base">
            {{ item.description ? item.description : '&mdash;' }}
          </span>

          <NavLink label="Learn More" :url="`/services/${item.slug}`" class="mt-3 [&]:text-accent" />
        </Card>
      </div>
    </div>

    <Error v-if="!data || !data.length">Services not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/services')
</script>
