<template>
  <div>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-8 xl:max-w-full max-w-3xl mx-auto">
      <Card v-for="(item, index) in data" :key="index" data-aos="zoom-in" :data-aos-delay="(index + 1) * 300">
        <span
          class="inline-flex items-center absolute -top-[12px] right-5 h-[24px] px-5 uppercase tracking-widest bg-zinc-950 font-medium text-[10px] border-2 border-zinc-900 rounded-full"
          v-if="item.language">
          {{ item.language }}
        </span>

        <h2 class="mb-1"><font-awesome icon="folder" class="mr-1 text-accent" /> {{ item.name }}</h2>
        <p class="mb-4 xl:line-clamp-1 xl:leading-6 sm:leading-7 leading-6 xl:text-sm sm:text-base text-sm">
          {{ item.description ? item.description : '&mdash;' }}
        </p>

        <NavLink label="Learn More" :url="item.html_url" :tab="true" class="[&]:text-accent" />
      </Card>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/github')
</script>
