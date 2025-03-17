<template>
  <div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 relative" v-if="data && data.length">
      <div
        v-for="(item, index) in data"
        :key="index"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="(index + 1) * 150">
        <div class="tech relative p-6 bg-zinc-800/50 backdrop-blur border-2 border-zinc-800 rounded-xl">
          <div class="flex gap-5">
            <div>
              <i :class="['rounded-xl text-5xl text-accent', item.icon]"></i>
            </div>

            <div>
              <Subheading :label="item.name" class="[&]:mb-1 [&]:text-zinc-200" />

              <span class="block mb-2 lg:leading-5 leading-6 lg:text-sm text-base">
                {{ item.description ? item.description : '&mdash;' }}
              </span>

              <NavLink :label="`Learn about ${item.name}`" :url="item.url" :tab="true" class="[&]:text-accent" />
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
