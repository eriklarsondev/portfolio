<template>
  <div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 relative" v-if="data && data.length">
      <div v-for="(item, index) in data" :key="index">
        <div class="tech relative p-6 bg-zinc-800 rounded-xl">
          <div class="flex gap-5">
            <div>
              <i :class="['rounded-xl text-5xl text-accent', item.icon]"></i>
            </div>

            <div>
              <span class="block mb-2 lg:leading-5 sm:leading-6 leading-5 lg:text-sm sm:text-base text-sm">
                {{ item.description ? item.description : '&mdash;' }}
              </span>

              <NavLink label="Learn More" :url="item.url" :tab="true" class="[&]:text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Error v-if="!data || !data.length">Technologies not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/technologies')
</script>
