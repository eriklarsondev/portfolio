<template>
  <div>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-8 xl:max-w-full max-w-3xl mx-auto" v-if="data && data.length">
      <div v-for="(item, index) in data" :key="index">
        <Card>
          <h2 class="mb-1">
            <span class="text-accent">0{{ index + 1 }}.</span> {{ item.name }}
          </h2>
          <span class="block xl:leading-6 sm:leading-7 leading-6 xl:text-sm sm:text-base text-sm">
            {{ item.description ? item.description : '&mdash;' }}
          </span>
        </Card>
      </div>
    </div>

    <Error v-if="!data || !data.length">Services not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/services')
</script>
