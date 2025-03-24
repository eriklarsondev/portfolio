<template>
  <div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6" v-if="data && data.length">
      <Card
        v-for="(item, index) in data"
        :key="index"
        class="[&]:bg-zinc-800/50 backdrop-blur [&]:border-zinc-800"
        data-aos="zoom-in"
        :data-aos-delay="(index + 1) * 150">
        <ListGroup :items="item.technologies" class="mb-3" />

        <h3 class="mb-1"><font-awesome icon="folder" class="mr-1 text-accent" /> {{ item.name }}</h3>
        <p class="m-0 md:line-clamp-2 lg:leading-6 leading-7 lg:text-sm text-base">
          {{ item.description ? item.description : '&mdash;' }}
        </p>

        <NavLink label="Learn More" :url="item.url" :tab="true" class="mt-3 [&]:text-accent" v-if="item.url" />
      </Card>
    </div>

    <Error v-if="!data || !data.length">Projects not founds</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/projects?featured=false')
</script>
