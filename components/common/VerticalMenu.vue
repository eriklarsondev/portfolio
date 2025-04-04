<template>
  <ul>
    <li v-for="(item, index) in props.items" :key="index" class="block relative">
      <div>
        <h4 class="m-0"><font-awesome icon="file-lines" class="mr-1 text-accent" /> {{ item.name }}</h4>
        <p class="mb-1 line-clamp-2 lg:leading-6 leading-7 lg:text-sm text-base">
          {{ item.description ? item.description : '&mdash;' }}
        </p>

        <NavLink label="Learn more" :url="`/${props.base}/${item.slug}`" class="[&]:text-accent" />
      </div>

      <hr class="my-4" v-if="index < props.items.length - 1" />
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['items', 'base'])
</script>
