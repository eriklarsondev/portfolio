<template>
  <div>
    <ul v-if="data">
      <li
        v-for="(item, index) in data.items"
        :key="index"
        :class="['inline-block', { 'mr-7': index < data.items.length - 1 }]">
        <NavLink :label="item.label" :url="item.url" :tab="item.newTab" />
      </li>
    </ul>

    <Error v-if="!data">navbar not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/menus/navbar')
</script>
